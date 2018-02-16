import * as R from 'ramda';

import { ApolloClient } from 'apollo-client';
import { from, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { withClientState } from 'apollo-link-state';
import gql from 'graphql-tag';

import searchIndex from './searchIndex';

const PORT = 4000;

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  link: from([
    withClientState({
      cache,
      defaults: {
        searchTerm: '',
        clientSearchIndexed: false,
        clientSearchResults: [],
        currentSymbol: null,
      },
      resolvers: {
        Query: {
          currentSymbol(root, args, { cache }) {
            return cache.readQuery({
              query: gql`
                {
                  currentSymbol @client {
                    id
                    name
                  }
                }
              `,
            });
          },
        },
        Mutation: {
          updateCurrentSymbol(root, { symbol }, { cache }) {
            cache.writeQuery({
              query: gql`
                {
                  currentSymbol @client {
                    id
                    name
                  }
                }
              `,
              data: { currentSymbol: symbol ? symbol : null },
            });

            return symbol;
          },
          async updateSearch(root, { text, ...args }, { cache, ...context }) {
            const { clientSearchIndexed } = cache.readQuery({
              query: gql`
                {
                  clientSearchIndexed
                }
              `,
            });
            if (!clientSearchIndexed) {
              const query = await client.query({
                query: gql`
                  {
                    TOPS {
                      id
                      marketPercent
                      volume
                    }
                    reference {
                      symbols {
                        id
                        name
                      }
                    }
                  }
                `,
              });

              // symbols _.keyBy id
              const symbolMap = R.indexBy(R.prop('id'), query.data.reference.symbols.filter(v => !!v.name));
              const corpus = query.data.TOPS.map(top => ({ ...top, ...symbolMap[top.id] }));

              // TOPS gives us an implicit sort of the most active/relevant
              searchIndex.create(corpus);

              cache.writeData({ data: { clientSearchIndexed: true } });
            }

            return searchIndex.search(text);
          },
        },
      },
    }),
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

export default client;
