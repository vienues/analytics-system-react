import date, { formatDate } from './date'
import { pubsub } from '../pubsub'
import pricing from '../pricing'
import search from './searchIndex'
import { RefSymbol, Chart, News, Tick } from '../types'
import getDataSource from '../connectors'

type Ctx = { iex: ReturnType<typeof getDataSource> }
type IexQuoteResult = { [s: string]: { quote: { symbol: string } } }

pricing(pubsub)

export default {
  ...date,

  Stock: {
    id: ({ symbol }: RefSymbol) => symbol,
    chart: ({ id }: RefSymbol, { tenor, date }: Chart, { iex }: Ctx) =>
      iex.fetch(`stock/${id}/chart/${tenor || (date && `date/${date}`)}`),
    company: ({ id }: RefSymbol, args: any, { iex }: Ctx) => iex.fetch(`stock/${id}/company`),
    news: ({ id }: RefSymbol, { last }: { last: number }, { iex }: Ctx) =>
      iex.fetch(`stock/${id}/news/${last ? `last/${last}` : ''}`),
    peers: ({ id }: RefSymbol, args: any, { iex }: Ctx) => iex.fetch(`stock/${id}/peers`),
    previous: ({ id }: RefSymbol, args: any, { iex }: Ctx) => iex.fetch(`stock/${id}/previous`),
    price: ({ id }: RefSymbol, args: any, { iex }: Ctx) => iex.fetch(`stock/${id}/price`),
    quote: ({ id }: RefSymbol, args: any, { iex }: Ctx) =>
      iex.fetch(`stock/${id}/quote`).then(x => ({ ...x, id: x.symbol })),
    stats: ({ id }: RefSymbol, args: any, { iex }: Ctx) => iex.fetch(`stock/${id}/stats`),
  },

  Company: {
    id: ({ symbol }: RefSymbol) => symbol,
    name: ({ companyName }: { companyName: string }) => companyName,
    peers: ({ symbol }: RefSymbol, args: any, { iex }: Ctx) => iex.fetch(`stock/${symbol}/peers`),
  },

  News: {
    id: ({ url }: News) => url,
  },

  Tick: {
    datetime: ({ date, minute }: Tick) => {
      return `${formatDate(date) || ''}${minute ? `T${minute}` : ''}`
    },
  },

  TOP: {
    id: ({ symbol }: RefSymbol) => symbol,
  },

  ReferenceQuery: {
    symbols: (root: any, args: any, { iex }: Ctx) => iex.fetch(`ref-data/symbols`),
  },

  ReferenceSymbol: {
    id: ({ symbol }: RefSymbol) => symbol,
  },

  Query: {
    search: (root: any, { text }: { text: string }) => search(text),
    markets: async (_: any, __: any, { iex }: Ctx) => {
      const val: IexQuoteResult = await iex.fetch(`stock/market/batch?symbols=spy,dia,iwm&types=quote`)
      return Object.values(val).map(x => ({ ...x.quote, id: x.quote.symbol }))
    },

    stock: (root: any, { id }: RefSymbol, { iex }: Ctx) => {
      id = id.toUpperCase()

      return {
        id,
        symbol: id,
      }
    },

    // Having to repeat the resolver is silly …
    company: async (root: any, { id }: RefSymbol, { iex }: Ctx) => {
      console.log(id)

      try {
        root = await iex.fetch(`stock/${id}/company`)
      } catch (e) {
        console.log(e)
      }

      return {
        ...root,
        id,
        symbol: id,
        name: root.companyName,
      }
    },

    TOPS: (root: any, args: any, { iex }: Ctx) => iex.fetch('/tops'),

    reference: (root: any) => {
      return {
        symbols: {},
      }
    },
  },

  Subscription: {
    getQuotes: {
      resolve: (payload: any, args: any, context: any, info: any) => payload,
      subscribe: (_: any, args: { symbols: string[] }) => {
        console.info('hit resolver with:', args.symbols)
        pubsub.publish('SUBSCRIBE_TO_MARKET_UPDATES', args.symbols)
        return pubsub.asyncIterator(args.symbols.map(symbol => `MARKET_UPDATE.${symbol}`))
      },
    },
  },
}
