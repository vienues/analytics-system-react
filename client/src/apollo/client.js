import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { from, split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import clientState from './clientState'

const PORT = 4000

const cache = new InMemoryCache()

const links = [
  withClientState({ cache, ...clientState }),
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

const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  link: from(links),
})

export default client
