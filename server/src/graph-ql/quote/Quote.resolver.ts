import { IResolvers } from 'graphql-tools'
import logger from '../../services/logger'
import getDataSource from '../../connectors'
import { Quote as QuoteAPI } from 'iexcloud_api_wrapper'
import { pubsub } from '../../pubsub'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

const resolvers: IResolvers = {
  Query: {
    markets: async () => {
      try {
        const response: QuoteAPI = await iex.iexApiRequest(`/stock/market/batch?symbols=spy,dia,iwm&types=quote`)
        return Object.values(response).map(quote => quote.quote)
      } catch (e) {
        logger.error(`Error: ${e.message}`)
        return null
      }
    },
  },
  Quote: {
    id: parent => {
      return parent.symbol
    },
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
        const topics = args.symbols.map((arg: string) => `MARKET_UPDATE.${arg}`)
        return pubsub.asyncIterator(topics)
      },
    },
  },
}

export default resolvers
