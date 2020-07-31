import { IResolvers } from 'graphql-tools'
import QueryService from './Quote.service'
import logger from '../../services/logger'
import getDataSource from '../../connectors'
import { Quote as QuoteAPI } from 'iexcloud_api_wrapper'
import { pubsub } from '../../pubsub'
import CompanyService from '../company/Company.service'
import { Container } from 'typedi'

const companyService = Container.get(CompanyService)
const iex = getDataSource(process.env.INSIGHTS_OFFLINE)
const quoteService = Container.get(QueryService)

const resolvers: IResolvers = {
  Query: {
    quote: async (parent, args: { id: string | '' }, ctx) => {
      try {
        return quoteService.getQuote(args.id)
      } catch (e) {
        logger.error(`Error: ${e.message}`)
        return null
      }
    },
    markets: async (args: { text: string }) => {
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
    company: async parent => {
      return companyService.getCompany(parent.symbol)
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
      subscribe: (src, args: { symbols: [string] }) => {
        const topics = args.symbols.map((arg: string) => `MARKET_UPDATE.${arg}`)
        return pubsub.asyncIterator(topics)
      },
    },
  },
}

export default resolvers
