import fetch from 'node-fetch';
import date from './date';
import { RedisPubSub } from 'graphql-redis-subscriptions';

const ENDPOINT = 'https://api.iextrading.com/1.0';
const pubsub = new RedisPubSub();

async function fetchAndParse(url) {
  return (await fetch(url)).json();
}

export default {
  ...date,
  Subscription: {
    indexUpdates: {
      resolve: (payload, args, context, info) => {
        console.log(payload);
        return payload;
      },
      subscribe: (_, args) => {
        pubsub.publish('SUBSCRIBE_TO_INDEX_UPDATES', args.symbols);
        return pubsub.asyncIterator(args.symbols.map(symbol => `INDEX_UPDATE.${symbol}`));
      },
    },
  },
  Query: {
    async stock(_, { symbol }) {
      return {
        ...(await fetchAndParse(`${ENDPOINT}/stock/${symbol}/stats`)),
        symbol,
      };
    },
    symbols: () => fetchAndParse(`${ENDPOINT}/ref-data/symbols`),
  },
  Stock: {
    id: stock => stock.symbol,
    peers: ({ symbol }) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/peers/`),
    price: ({ symbol }) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/price/`),
    quote: ({ symbol }) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/quote/`),
    relatedNews: ({ symbol }) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/news/`),
  },
  News: {
    id: article => article.url,
  },
};
