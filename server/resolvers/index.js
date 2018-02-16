import { RedisPubSub } from 'graphql-redis-subscriptions';
import date, { formatDate } from './date';

const pubsubRedis = new RedisPubSub();

export default {
  ...date,

  Stock: {
    id: ({ symbol }) => symbol,
    chart: ({ id }, { tenor, date }, { iex }) => iex.fetch(`stock/${id}/chart/${tenor || (date && `date/${date}`)}`),
    company: ({ id }, args, { iex }) => iex.fetch(`stock/${id}/company`),
    news: ({ id }, { last }, { iex }) => iex.fetch(`stock/${id}/news/${last ? `last/${last}` : ''}`),
    peers: ({ id }, args, { iex }) => iex.fetch(`stock/${id}/peers`),
    previous: ({ id }, args, { iex }) => iex.fetch(`stock/${id}/previous`),
    price: ({ id }, args, { iex }) => iex.fetch(`stock/${id}/price`),
    quote: ({ id }, args, { iex }) => iex.fetch(`stock/${id}/quote`),
    stats: ({ id }, args, { iex }) => iex.fetch(`stock/${id}/stats`),
  },

  Company: {
    id: ({ symbol }) => symbol,
    name: ({ companyName }) => companyName,
    peers: ({ symbol }, args, { iex }) => iex.fetch(`stock/${symbol}/peers`),
  },

  News: {
    id: ({ url }) => url,
  },

  Tick: {
    datetime: ({ date, minute }) => {
      return `${formatDate(date) || ''}${minute ? `T${minute}` : ''}`;
    },
  },

  TOP: {
    id: ({ symbol }) => symbol,
  },

  ReferenceQuery: {
    symbols: (root, args, { iex }) => iex.fetch(`ref-data/symbols`),
  },

  ReferenceSymbol: {
    id: ({ symbol }) => symbol,
  },

  Query: {
    markets: () => {
      return [{ id: 'NASDAQ', name: 'NASDAQ' }, { id: 'S&P', name: 'S&P' }];
    },

    stock: (root, { id }, { iex }) => {
      id = id.toUpperCase();

      return {
        id,
        symbol: id,
      };
    },

    // Having to repeat the resolver is silly …
    company: async (root, { id }, { iex }) => {
      try {
        root = await iex.fetch(`stock/${id}/company`);
      } catch (e) {
        console.log(e);
      }

      return {
        id,
        symbol: id,
        ...root,
        name: root.companyName,
      };
    },

    TOPS: (root, args, { iex }) => iex.fetch('/tops'),

    reference: root => {
      return {
        symbols: {},
      };
    },
  },

  Subscription: {
    marketUpdates: {
      resolve: (payload, args, context, info) => {
        return payload;
      },
      subscribe: (_, args) => {
        pubsubRedis.publish('SUBSCRIBE_TO_MARKET_UPDATES', args.symbols);
        return pubsubRedis.asyncIterator(args.symbols.map(symbol => `MARKET_UPDATE.${symbol}`));
      },
    },
  },
};
