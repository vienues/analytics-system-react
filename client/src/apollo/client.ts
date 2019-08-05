import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { from, split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const cache = new InMemoryCache()
const address = process.env.REACT_APP_ANALYTICS_SERVER_HOST || 'localhost:4000'

const links = [
  split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    new WebSocketLink({
      options: {
        reconnect: true,
      },
      uri: `wss://${address}/subscriptions`,
    }),
    new HttpLink({ uri: `https://${address}/graphql` }),
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
