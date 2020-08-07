import { IResolvers } from 'graphql-tools'
import FxService from './Fx.service'
import { Container } from 'typedi'
import { pubsub } from '../../pubsub'
import logger from '../../services/logger'

const fxService = Container.get(FxService)

const withCancel = (asyncIterator: AsyncIterator<unknown, any, undefined>, onCancel: () => void) => {
  const asyncReturn = asyncIterator.return;

  asyncIterator.return = () => {
    onCancel();
    return asyncReturn ? asyncReturn.call(asyncIterator) : Promise.resolve({ value: undefined, done: true });
  };

  return asyncIterator;
};

const resolvers: IResolvers = {
  Query: {
    getPriceHistory: async (_, args: { id: string }) => {
      return await fxService.getPriceHistory(args.id)
    },
  },
  Subscription: {
    getFXPriceUpdates: {
      subscribe: (_, args: { id: string }) => {
        logger.debug(`Subscribe FX price updates for ${args.id}`)
        fxService.subscribePriceUpdates(args.id)
        return withCancel(pubsub.asyncIterator(`FX_CURRENT_PRICING.${args.id}`), () => {
          // TODO: unsubscribe
          logger.debug(`Unsubscribe FX price updates for ${args.id}`)
        })
      },
    },
  },
}

export default resolvers
