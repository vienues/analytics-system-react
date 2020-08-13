import CompanyService from './Company.service'
import { IResolvers } from 'graphql-tools'
import { Container } from 'typedi'

const companyService = Container.get(CompanyService)

const resolvers: IResolvers = {
  Query: {
    company: async (_, args: { id: string }) => {
      return companyService.getCompany(args.id)
    },
  },
  Company: {
    id: parent => {
      return parent.symbol
    },
    name: parent => {
      return parent.companyName
    },
  },
}

export default resolvers
