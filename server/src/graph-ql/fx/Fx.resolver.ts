import { IResolvers } from 'graphql-tools'
import FxService from './Fx.service'
import { Container } from 'typedi'
import { pubsub } from '../../pubsub'
import logger from '../../services/logger'
import { withCancel } from '../../utils/asyncIteratorUtils'

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
        logger.debug(`Subscribe FX updates for ${args.id}`)

        fxService.subscribePriceUpdates(args.id)
        const result = pubsub.asyncIterator(`FX_CURRENT_PRICING.${args.id}`)

        return withCancel(result, () => {
          logger.debug(`Unsubscribe FX updates for ${args.id}`)
          fxService.unsubscribePriceUpdates()
        })
      },
    },
  },
}

export default resolvers
