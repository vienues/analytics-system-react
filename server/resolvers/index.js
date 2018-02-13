import _ from 'lodash'

import fetch from 'node-fetch'
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PubSub, withFilter } from 'graphql-subscriptions'
import * as Ix from 'ix'

import * as simulator from '../simulator'

import date, { formatDate } from './date'

const TICK = 'TICK'
const PUBSUB = new PubSub()
const ENDPOINT = 'https://api.iextrading.com/1.0'

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
      return `${formatDate(date) || ''}${minute ? `T${minute}` : ''}`
    },
  },

  Query: {
    stock: (root, { id }, { iex }) => {
      id = id.toUpperCase();

      return {
        id,
        symbol: id
      }
    },

    // Having to repeat the resolver is silly …
    company: async (root, { id }, { iex }) => {
      try {
        root = await iex.fetch(`stock/${id}/company`);
      } catch(e) {
        console.log(e);
      }

      return {
        id,
        symbol: id,
        ...root,
        name: root.companyName
      }
    },

    reference: {
      symbols: (root, args, { iex }) => iex.fetch(`ref-data/symbols`),
    }
  },

  Subscription: {
    marketUpdates: {
      resolve: (payload, args, context, info) => {
        console.log(payload);
        return payload;
      },
      subscribe: (_, args) => {
        pubsubRedis.publish('SUBSCRIBE_TO_MARKET_UPDATES', args.symbols);
        return pubsubRedis.asyncIterator(args.symbols.map(symbol => `MARKET_UPDATE.${symbol}`));
      },
    },
    symbols: {
      resolve(payload, args, context, info) {
        console.log('payload', payload)
        return payload
        // const ids = new Set(variables.ids)
        // const update = _.filter(payload, p => ids.has(p.id))
        // return update;
      },
      subscribe: PUBSUB.asyncIterator(TICK),
    }
  },
}

async function* gen() {
  while (true) {
    yield new Promise(resolve => {
      setInterval(() => {
        resolve({
          indices: [
            {
              id: 'DOWJONES',
              name: 'Dow Jones',
              change: randomPrice(),
              volume: randomPrice(),
            },
          ],
        })
      }, 1000)
    })
  }
}

const max = 66
const min = 62
const randomPrice = () => (Math.random() * (max - min) + min).toFixed(2)

async function startSimulator() {
  const results = await (await fetch(`${ENDPOINT}/tops/last`)).json()
  // console.log('results size', _.size(results))
  simulator.simulate(results)
  simulator.subscribe(result => {
    // console.log('simulator update')
    PUBSUB.publish(TICK, result)
  })
}

startSimulator()
setInterval(() => PUBSUB.publish(TICK, []), 1000)
