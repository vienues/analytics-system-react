import { IResolvers } from 'graphql-tools';
import FxService from './Fx.service'
import { Container } from 'typedi'

const fxService = Container.get(FxService);

const resolvers: IResolvers = {
    Query:{
        getPriceHistory: async (parent, { from, to }, ctx) => {
            const retVal = await fxService.getPriceHistory(from, to)
            fxService.subscribePriceUpdates(from, to)
            return retVal;
        }
    },
}

export default resolvers;