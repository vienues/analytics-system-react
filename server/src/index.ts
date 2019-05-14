import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { execute, subscribe } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { createServer } from 'http'
import path from 'path'
import 'reflect-metadata'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import MessageTypes from 'subscriptions-transport-ws/dist/message-types'
import { buildTypeDefsAndResolvers } from 'type-graphql'
import { Container } from 'typedi'
import getDataSource from './connectors/index'
import { pubsub } from './pubsub'
import logger from './services/logger'
import pricing from './services/pricing'

pricing(pubsub)

async function bootstrap() {
  const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    container: Container,
    pubSub: pubsub,
    resolvers: [path.normalize(`${__dirname}/graph-ql/**/*.resolver.js`)],
    validate: false,
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
      context: { iex },
      schema,
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

  interface ISubscriptionOptions extends Object {
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

  interface ISubscribeMessage extends Object {
    id: string
    type: MessageTypes
    payload: ISubscriptionOptions
  }

  type OperationId = string
  type Symbols = string[]

  interface IWebSocketWithQuoteExtras extends WebSocket {
    id?: string
    operation: Map<OperationId, Symbols>
  }

  ws.listen(PORT, () => {
    logger.info(`Apollo Server is now running on http://localhost:${PORT}`)
    // Set up the WebSocket for handling GraphQL subscriptions
    // tslint:disable-next-line:no-unused-expression
    new SubscriptionServer(
      {
        execute,
        schema,
        subscribe,

        // tslint:disable-next-line:object-literal-sort-keys
        onOperation: (
          message: ISubscribeMessage,
          params: ISubscriptionOptions,
          socket: IWebSocketWithQuoteExtras,
        ): ISubscriptionOptions => {
          if (!socket.operation) {
            socket.operation = new Map<OperationId, Symbols>()
          }

          if (socket.operation.has(message.id)) {
            throw new Error(`Received same operation twice!`)
          }
          socket.operation.set(message.id as OperationId, message.payload.variables.markets as Symbols)
          pubsub.publish('SUBSCRIBE_TO_MARKET_UPDATES', message.payload.variables.markets)
          return params
        },
        onOperationComplete: (socket: IWebSocketWithQuoteExtras, opId: string) => {
          pubsub.publish('UNSUBSCRIBE_TO_MARKET_UPDATES', socket.operation.get(opId))
        },
      },
      {
        path: '/subscriptions',
        server: ws,
      },
    )
  })
}

bootstrap()
