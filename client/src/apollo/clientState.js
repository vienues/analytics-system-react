import gql from 'graphql-tag';
import searchIndex from './searchIndex';

const defaults = {
  currentSymbol: null,
};

const resolvers = {
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
    updateSearch(root, { text }) {
      return searchIndex.search(text);
    },
  },
};

export default {
  defaults,
  resolvers,
};
