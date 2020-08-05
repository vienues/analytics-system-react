import { IResolvers } from 'graphql-tools'
import FxService from './Fx.service'
import { Container } from 'typedi'

const fxService = Container.get(FxService)

const resolvers: IResolvers = {
  Query: {
    getPriceHistory: async (parent, args: { from: string; to: string }, ctx) => {
      const retVal = await fxService.getPriceHistory(args.from, args.to)
      fxService.subscribePriceUpdates(args.from, args.to)
      return retVal
    },
  },
}

export default resolvers
