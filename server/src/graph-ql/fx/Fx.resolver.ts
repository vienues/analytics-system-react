import { IResolvers } from 'graphql-tools'
import FxService from './Fx.service'
import { Container } from 'typedi'
import { pubsub } from '../../pubsub'
import { map } from 'rxjs/operators'

const fxService = Container.get(FxService)

// setTimeout(() => {
//   pubsub.subscribe('SUBSCRIBE_TO_FX_UPDATES', (id: string) => {
//     fxService.subscribePriceUpdates(id)
//   })
//   pubsub.subscribe('UNSUBSCRIBE_TO_FX_UPDATES', (id: string) => {
//     fxService.unsubscribePriceUpdates(id)
//   })
// }, 1000)

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
