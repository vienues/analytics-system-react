import { IResolvers } from 'graphql-tools';
import StatsService from '../stats/Stats.service'
import CompanyService from '../company/Company.service'
import getDataSource  from '../../connectors'
import search from '../../services/searchIndex'
import { TickService } from '../tick'
import { QuoteService } from '../quote'
import  NewsService  from '../news/News.service'
import { Container } from 'typedi'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)
const companyService = Container.get(CompanyService);
const statsService = Container.get(StatsService);
const tickService =  Container.get(TickService);
const quoteService = Container.get(QuoteService); 
const newsService = Container.get(NewsService); 

const resolvers: IResolvers = {
    Query:{
        stock: async (parent, args: { id: string }, ctx) => {
            return {
                id: args.id.toUpperCase(),
                symbol: args.id,
              }
        },
        OLHC: async (parent, args: { id: string }, ctx) => {
            return iex.ohlc(args.id)
        },
        search: async (parent, args: { text: string }, ctx) => {
            return search(args.text)
        }
    },
    Stock:{
        chart:(parent:{id:string}) => {
            return tickService.getChart(parent.id);
        },
        company: async (parent:{id:string}) => {
            return companyService.getCompany(parent.id);
        },
        stats: async (parent:{id:string}) => {
            return statsService.getStats(parent.id);
        },
        peers: async (parent:{id:string}) => {
            return  iex.peers(parent.id);
        },
        quote: async (parent:{id:string}) => {
            return  quoteService.getQuote(parent.id);
        },
        price: async (parent:{id:string}) => {
            return  iex.price(parent.id);
        },
        previous: async (parent:{id:string}) => {
            // @ts-ignore - vwap does not exist in typings
            return iex.previousDay(parent.id)
        },
        news: async (parent:{id:string},args: { last: number }) => {
            return newsService.getLatestNews(parent.id, args.last);
        }
    }
}

export default resolvers;