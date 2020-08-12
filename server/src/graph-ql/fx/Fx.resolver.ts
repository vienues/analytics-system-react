import { IResolvers } from 'graphql-tools'
import FxService from './Fx.service'
import { Container } from 'typedi'
import { pubsub } from '../../pubsub'

const fxService = Container.get(FxService)

const resolvers: IResolvers = {
  Query: {
    getPriceHistory: async (_, args: { id: string }) => {
      return await fxService.getPriceHistory(args.id)
    },
  },
  Subscription: {
    getFXPriceUpdates: {
      subscribe: (_, args: { id: string }) => {
        fxService.subscribePriceUpdates(args.id)
        return pubsub.asyncIterator(`FX_CURRENT_PRICING.${args.id}`)
      },
    },
  },
}

export default resolvers
