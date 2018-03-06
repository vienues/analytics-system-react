import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const PORT = 4000

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  link: split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    new WebSocketLink({
      uri: `ws://localhost:${PORT}/subscriptions`,
      options: {
        reconnect: true,
      },
    }),
    new HttpLink({ uri: `http://localhost:${PORT}/graphql` }),
  ),
})

export default client
