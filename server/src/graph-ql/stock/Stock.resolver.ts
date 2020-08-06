import { IResolvers } from 'graphql-tools'
import StatsService from '../stats/Stats.service'
import CompanyService from '../company/Company.service'
import getDataSource from '../../connectors'
import { TickService } from '../tick'
import { QuoteService } from '../quote'
import { Container } from 'typedi'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)
const companyService = Container.get(CompanyService)
const statsService = Container.get(StatsService)
const tickService = Container.get(TickService)
const quoteService = Container.get(QuoteService)

const resolvers: IResolvers = {
  Query: {
    stock: async (_, args: { id: string }) => {
      return {
        id: args.id.toUpperCase(),
        symbol: args.id,
      }
    },
  },
  Stock: {
    chart: (parent: { id: string }) => {
      return tickService.getChart(parent.id)
    },
    company: async (parent: { id: string }) => {
      return companyService.getCompany(parent.id)
    },
    stats: async (parent: { id: string }) => {
      return statsService.getStats(parent.id)
    },
    peers: async (parent: { id: string }) => {
      return iex.peers(parent.id)
    },
    quote: async (parent: { id: string }) => {
      return quoteService.getQuote(parent.id)
    },
    price: async (parent: { id: string }) => {
      return iex.price(parent.id)
    },
    previous: async (parent: { id: string }) => {
      return iex.previousDay(parent.id)
    },
  },
}

export default resolvers
