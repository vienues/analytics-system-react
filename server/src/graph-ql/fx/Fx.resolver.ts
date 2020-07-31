import { IResolvers } from 'graphql-tools'
import FxService from './Fx.service'
import { Container } from 'typedi'
import { pubsub } from '../../pubsub'
const fxService = Container.get(FxService)

setTimeout(() => {
  pubsub.subscribe('SUBSCRIBE_TO_FX_UPDATES', (fxPair: string) => {
    fxService.subscribeFXUpdates(fxPair)
  })
  pubsub.subscribe('UNSUBSCRIBE_TO_FX_UPDATES', (fxPair: string) => {
    fxService.stopFXUpdates(fxPair)
  })
}, 1000)

const resolvers: IResolvers = {
  Query: {
    getPriceHistory: async (parent, { from, to }, ctx) => {
      const retVal = await fxService.getPriceHistory(from, to)
      fxService.subscribeFXUpdates(`${from}${to}`)
      return retVal
    },
  },
  Subscription: {
    getIntradayFXRate: {
      resolve: payload => {
        return {
          id: payload.symbol,
          ...payload,
        }
      },
      subscribe: (src, args: { from: string; to: string }) => {
        return pubsub.asyncIterator(`FX_UPDATE.${args.from}${args.to}`)
      },
    },
  },
}

export default resolvers
