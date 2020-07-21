import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { from, split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { getWebsocketUri, getUri } from 'helpers/uriHelper'

const cache = new InMemoryCache()

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
      uri: getWebsocketUri('/subscriptions'),
    }),
    new HttpLink({ uri: getUri('/graphql') }),
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
