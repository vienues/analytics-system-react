import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { from, split, ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { withClientState } from 'apollo-link-state';
import { getMainDefinition, hasDirectives } from 'apollo-utilities';
import clientState from './clientState';
import { Observable } from 'rxjs';

const PORT = 4000;

const cache = new InMemoryCache();

const openfinLink = new ApolloLink((operation, forward) => {
  const isOpenfin = hasDirectives(['openfin'], operation.query);
  if (!isOpenfin) return forward(operation);

  console.log('sub to bus');
  return Observable.create(observer => {
    window.fin.desktop.InterApplicationBus.subscribe('*', null, 'SYMBOL.CHANGE', message => {
      console.log('hit');
      observer.next(message);
    });
  });
});

const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  link: from([
    openfinLink,
    withClientState({ cache, ...clientState }),
    split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      new WebSocketLink({
        uri: `ws://localhost:${PORT}/subscriptions`,
        options: {
          reconnect: true,
        },
      }),
      new HttpLink({ uri: `http://localhost:${PORT}/graphql` }),
    ),
  ]),
});

// client.subscribe({
//   query: gql`
//     subscription SelectionChange {
//       selection @openfin{
//         id
//         symbol
//       }
//     }
//   `,
// }).subscribe(x=>console.log('next   '), x=>console.error('shit'), x=>console.warn('complete'))
//

export default client;
