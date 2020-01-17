import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { from, split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const cache = new InMemoryCache()
const address = process.env.REACT_APP_ANALYTICS_SERVER_HOST || 'localhost:4000'
const { http, ws } = process.env.NODE_ENV === 'development' ? { http: 'http', ws: 'ws' } : { http: 'https', ws: 'wss' }

interface IDefinition {
  kind: string
  operation?: string
}

const links = [
  split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation }: IDefinition = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    new WebSocketLink({
      options: {
        reconnect: true,
      },
      uri: `${ws}://${address}/subscriptions`,
    }),
    new HttpLink({ uri: `${http}://${address}/graphql` }),
  ),
]

const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  link: from(links),
})

cache.writeData({
  data: {
    symbol: '',
  },
})

export default client
