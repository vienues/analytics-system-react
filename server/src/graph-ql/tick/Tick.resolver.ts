import { IResolvers } from 'graphql-tools'
import TickService from './Tick.service'
import { pubsub } from '../../pubsub'
import { formatDate } from '../DateScalars'
import QuoteService from '../quote/Quote.service'
import { Container } from 'typedi'

const tickService = Container.get(TickService)
const quoteService = Container.get(QuoteService)

setTimeout(() => {
  pubsub.subscribe('SUBSCRIBE_TO_INTRADAY_UPDATES', (symbol: string) => {
    quoteService.startIntradayPricingLoop(symbol)
  })
  pubsub.subscribe('UNSUBSCRIBE_TO_INTRADAY_UPDATES', (symbol: string) => {
    quoteService.stopIntradayPricingLoop(symbol)
  })
}, 500)

const resolvers: IResolvers = {
  Query: {
    intradayPrices: async (parent, args: { symbol: string; lastN: number }, ctx) => {
      return tickService.getIntradayPricing(args.symbol, args.lastN)
    },
  },
  Tick: {
    datetime: parent => {
      return `${formatDate(parent.date) || ''}${parent.minute ? `T${parent.minute}` : ''}`
    },
  },
  Intraday: {
    datetime: parent => {
      return `${formatDate(parent.date) || ''}${parent.minute ? `T${parent.minute}` : ''}`
    },
  },
  Subscription: {
    getIntradayPrices: {
      subscribe: (src, args: { symbol: string }) => {
        return pubsub.asyncIterator(`INTRADAY_PRICING.${args.symbol}`)
      },
    },
  },
}

export default resolvers
