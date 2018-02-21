import date, { formatDate } from './date';
import { createLogger } from 'bunyan';
import { pubsub } from '../pubsub';
import pricing from '../pricing';

const log = createLogger({ name: 'GRAPHQL-SERVER' });
pricing(pubsub);

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
    quote: ({ id }, args, { iex }) => iex.fetch(`stock/${id}/quote`).then(x => ({ ...x, id: x.symbol })),
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
    markets: async (_, __, { iex }) => {
      const val = await iex.fetch(`stock/market/batch?symbols=spy,dia,iwm&types=quote`);
      return Object.values(val).map(x => ({ ...x.quote, id: x.quote.symbol }));
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
      console.log(id);

      try {
        root = await iex.fetch(`stock/${id}/company`);
      } catch (e) {
        console.log(e);
      }

      return {
        ...root,
        id,
        symbol: id,
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
    getQuotes: {
      resolve: (payload, args, context, info) => payload,
      subscribe: (_, args) => {
        log.info(`Subscribing to ${args.symbols}`);
        pubsub.publish('SUBSCRIBE_TO_MARKET_UPDATES', args.symbols);
        return pubsub.asyncIterator(args.symbols.map(symbol => `MARKET_UPDATE.${symbol}`));
      },
    },
  },
};
