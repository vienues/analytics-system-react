import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { from, split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { openfinLink } from 'apollo/openfinLink'

const PORT = 4000

const cache = new InMemoryCache()

const links = [
  split(
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
]

if (window.fin) {
  links.unshift(openfinLink)
}

const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  link: from(links),
})

export default client
