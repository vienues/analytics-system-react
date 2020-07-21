import { IResolvers } from 'graphql-tools';
import StatsService from './Stats.service'
import CompanyService from '../company/Company.service'
import { Container } from 'typedi' 

const companyService = Container.get(CompanyService);
const statsService = Container.get( StatsService);

const resolvers: IResolvers = {
    Query:{
        stats: async (parent, args: { id: string }, ctx) => {
            return statsService.getStats(args.id);
        }
    },
    Stats:{
        id:(parent) => {
            return parent.symbol;
        },
        company: async (parent) => {
            return companyService.getCompany(parent.id)
        }
    }
}

export default resolvers;