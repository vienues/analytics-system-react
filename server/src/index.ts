import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import logger from './services/logger'
import RootSchema from './graph-ql/RootTypedef'
import RootResolver from './graph-ql/RootResolver'

// global websocket support for @stomp/rx-stomp
Object.assign(global, { WebSocket: require('websocket').w3cwebsocket })

async function bootstrap() {
  if (!process.env.IEXCLOUD_API_VERSION || !process.env.IEXCLOUD_PUBLIC_KEY) {
    // TODO: Send a friendly error to the client rather than just giving up
    logger.error('iex-cloud API key must be set')
  }
  
  const server = new ApolloServer({
    typeDefs: RootSchema,
    resolvers: RootResolver,
  })

  server.listen().then(({ url, subscriptionsUrl }) => {
    logger.info(`🚀 Server ready at ${url}`);
    logger.info(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
  });
}

bootstrap()
