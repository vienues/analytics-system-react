import 'reflect-metadata'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { createServer } from 'http'
import { SubscriptionServer, ConnectionContext } from 'subscriptions-transport-ws'
import { execute, subscribe } from 'graphql'
import getDataSource from './connectors/index'
import { buildTypeDefsAndResolvers } from 'type-graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { pubsub } from './pubsub'
import MessageTypes from 'subscriptions-transport-ws/dist/message-types'
import pricing from './services/pricing'

pricing(pubsub)

async function bootstrap() {
  const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    resolvers: [`${__dirname}\\GraphQL\\**\\*.resolver.js`],
    pubSub: pubsub,
  })
  const schema = makeExecutableSchema({ typeDefs, resolvers })
  const PORT = 4000
  const CLIENT_PORT = 3000

  const server = express()

  server.use(
    '*',
    cors({
      origin: [`http://localhost:${PORT}`, `http://localhost:${CLIENT_PORT}`],
    }),
  )

  server.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
      schema,
      context: { iex },
    }),
  )

  server.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
      subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
    }),
  )

  // Wrap the Express server
  const ws = createServer(server)

  interface SubscriptionOptions extends Object {
    query: string
    variables: {
      [key: string]: any
    }
    operationName: string
    context?: {
      [key: string]: any
    }
    schema?: {
      [key: string]: any
    }
  }

  interface SubscribeMessage extends Object {
    id: string
    type: MessageTypes
    payload: SubscriptionOptions
  }

  type OperationId = string
  type Symbols = string[]

  interface WebSocketWithQuoteExtras extends WebSocket {
    id?: string
    operation: Map<OperationId, Symbols>
  }

  ws.listen(PORT, () => {
    console.info(`Apollo Server is now running on http://localhost:${PORT}`)
    // Set up the WebSocket for handling GraphQL subscriptions
    new SubscriptionServer(
      {
        execute,
        subscribe,
        schema,
        onOperation: (
          message: SubscribeMessage,
          params: SubscriptionOptions,
          socket: WebSocketWithQuoteExtras,
        ): SubscriptionOptions => {
          if (!socket.operation) {
            socket.operation = new Map<OperationId, Symbols>()
          }

          if (socket.operation.has(message.id)) {
            throw new Error(`Received same operation twice!`)
          }
          socket.operation.set(<OperationId>message.id, <Symbols>message.payload.variables.markets)
          pubsub.publish('SUBSCRIBE_TO_MARKET_UPDATES', message.payload.variables.markets)
          return params
        },
        onOperationComplete: (socket: WebSocketWithQuoteExtras, opId: string) => {
          pubsub.publish('UNSUBSCRIBE_TO_MARKET_UPDATES', socket.operation.get(opId))
        },
      },
      {
        server: ws,
        path: '/subscriptions',
      },
    )
  })
}

bootstrap()
