import 'dotenv/config'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { execute, subscribe } from 'graphql'
import { createServer } from 'http'
import path from 'path'
import 'reflect-metadata'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import MessageTypes from 'subscriptions-transport-ws/dist/message-types'
import { Container } from 'typedi'
import getDataSource from './connectors/index'
import { pubsub } from './pubsub'
import logger from './services/logger'
import pricing from './services/pricing'
import RootSchema from './graph-ql/RootTypedef'
import RootResolver from './graph-ql/RootResolver'
pricing(pubsub)

Object.assign(global, { WebSocket: require('websocket').w3cwebsocket })

async function bootstrap() {
  logger.info(`Reactive Analytics server ${process.env.BUILD_VERSION || 'vUnknown'}`)

  const isOffline = process.env.INSIGHTS_OFFLINE
  const iex = getDataSource(isOffline)
  if (isOffline !== 'true') {
    if (!process.env.IEXCLOUD_API_VERSION || !process.env.IEXCLOUD_PUBLIC_KEY) {
      // TODO: Send a friendly error to the client rather than just giving up
      logger.error('iex-cloud API key must be set')
    }
  }

  const schema = makeExecutableSchema({ typeDefs: RootSchema, resolvers: RootResolver })
  const PORT = 4000
  const CLIENT_PORT = 3000

  const app = express()

  app.use(
    '*',
    cors({
      origin: [`http://localhost:${PORT}`, `http://localhost:${CLIENT_PORT}`],
    }),
  )

  app.use('/iexsandbox', bodyParser.json(), (req, res) => {
    res.status(200).json({ isSandbox: (process.env.IEXCLOUD_PUBLIC_KEY || '').toUpperCase().startsWith('T') })
  })
  const wsGqlURL = `ws://localhost:${PORT}/subscriptions`
  const apollo_server = new ApolloServer({
    typeDefs: RootSchema,
    resolvers: RootResolver,
    playground: {
      subscriptionEndpoint: wsGqlURL,
    },
  })
  apollo_server.applyMiddleware({ app })

  app.get('/iexsandbox', (req, res) => {
    res.status(200).json({ isSandbox: (process.env.IEXCLOUD_PUBLIC_KEY || '').toUpperCase().startsWith('T') })
  })

  app.get('/healthz', (req, res) => {
    res.status(200).send('tiptop')
  })

  // Wrap the Express server
  const ws = createServer(app)

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
    logger.info(`Subscriptions ready at ws://localhost:${PORT}${apollo_server.subscriptionsPath}`)
    // Set up the WebSocket for handling GraphQL subscriptions
    // tslint:disable-next-line:no-unused-expression
    new SubscriptionServer(
      {
        execute,
        schema,
        subscribe: (
          schema1,
          document,
          rootValue,
          contextValue,
          variableValues,
          operationName,
          fieldResolver,
          subscribeFieldResolver,
        ) => {
          return subscribe(
            schema1,
            document,
            rootValue,
            contextValue,
            variableValues,
            operationName,
            fieldResolver,
            subscribeFieldResolver,
          )
        },

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
          if (params.operationName === 'onFXPriceSubscription') {
            pubsub.publish('SUBSCRIBE_TO_FX_UPDATES', message.payload.variables.id)
          } else {
            socket.operation.set(message.id as OperationId, message.payload.variables.markets as Symbols)
            pubsub.publish('SUBSCRIBE_TO_MARKET_UPDATES', message.payload.variables.markets)
          }
          return params
        },
        onOperationComplete: (socket: IWebSocketWithQuoteExtras, opId: string) => {
          const param = socket.operation.get(opId)
          if (Array.isArray(param)) {
            pubsub.publish('UNSUBSCRIBE_TO_MARKET_UPDATES', param)
          } else {
            pubsub.publish('UNSUBSCRIBE_TO_INTRADAY_UPDATES', param)
          }
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
