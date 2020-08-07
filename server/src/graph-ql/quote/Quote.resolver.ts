import { IResolvers } from 'graphql-tools'
import logger from '../../services/logger'
import { pubsub } from '../../pubsub'
import { Container } from 'typedi'
import QuoteService from './Quote.service'
import { withCancel } from '../../utils/asyncIteratorUtils'

const quoteService = Container.get(QuoteService)

const resolvers: IResolvers = {
  Query: {
    markets: async () => {
      try {
        return quoteService.getQuotes(['SPY', 'DIA', 'IWM'])
      } catch (e) {
        // TODO: Fix code smell
        logger.error(`Error: ${e.message}`)
        return null
      }
    },
  },
  Quote: {
    id: parent => parent.symbol
  },
  Subscription: {
    getQuotes: {
      resolve: payload => {
        return {
          id: payload.symbol,
          ...payload,
        }
      },
      subscribe: (_, args: { symbols: [string] }) => {
        logger.debug(`Subscribe quote updates for ${args.symbols}`)
        quoteService.subscribeQuotes(args.symbols)
        
        const result = pubsub.asyncIterator(args.symbols.map(symbol => quoteService.getQuoteTopic(symbol)))
        
        return withCancel(result, () => {
          logger.debug(`Unsubscribe quote updates for ${args.symbols}`)
          quoteService.unsubscribeQuotes(args.symbols)
        })
      },
    },
  },
}

export default resolvers
