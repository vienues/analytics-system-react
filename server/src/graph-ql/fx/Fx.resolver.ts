import { IResolvers } from 'graphql-tools'
import FxService from './Fx.service'
import { Container } from 'typedi'

const fxService = Container.get(FxService)

const resolvers: IResolvers = {
  Query: {
    getPriceHistory: async (_, args: { id: string }) => {
      const retVal = await fxService.getPriceHistory(args.id)
      fxService.subscribePriceUpdates(args.id)
      return retVal
    },
  },
}

export default resolvers
