import searchIndex from './searchIndex';

const defaults = {
  currentSymbol: null,
};

const resolvers = {
  Mutation: {
    updateSearch(root, { text }) {
      return searchIndex.search(text);
    },
  },
};

export default {
  defaults,
  resolvers,
};
