import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { createServer } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { execute, subscribe } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers/index'
import typeDefs from '../schema.graphql'
import getDataSource from './connectors/index'

const PORT = 4000
const CLIENT_PORT = 3000

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)
const schema = makeExecutableSchema({ typeDefs, resolvers })
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

ws.listen(PORT, () => {
  console.info(`Apollo Server is now running on http://localhost:${PORT}`)
  // Set up the WebSocket for handling GraphQL subscriptions
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema,
    },
    {
      server: ws,
      path: '/subscriptions',
    },
  )
})
