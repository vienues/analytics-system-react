import { IResolvers } from 'graphql-tools';
import search from '../../services/searchIndex'
import { FxService } from '../fx'
import { CryptoService } from '../crypto'
import { Container } from 'typedi' 
import { MarketSegments } from './RefData.schema';

const fxService = Container.get( FxService);
const cryptoService =Container.get(CryptoService);

const resolvers: IResolvers = {
    Query:{
        symbol: async (parent, args: { id: string, market: MarketSegments}, ctx) => {
            switch (args.market.toLowerCase()) {
                case MarketSegments.STOCK: {
                  const results = search(args.id)
                  return results.find(s => s.id === args.id) || results[0]
                }
                case MarketSegments.CRYPTO: {
                  return cryptoService.getSymbol(args.id)
                }
                case MarketSegments.FX: {
                  return fxService.getSymbol(args.id)
                }
                default: {
                  throw new Error(`unsupported`)
                }
              }
        },
        symbols: async (parent, args: { text: string, marketSegment: MarketSegments}, ctx) => {
            switch (args.marketSegment.toLowerCase()) {
                case MarketSegments.STOCK: {
                  return search(args.text)
                }
                case MarketSegments.CRYPTO: {
                  return cryptoService.getSymbols(args.text)
                }
                case MarketSegments.FX: {
                  return fxService.getSymbols(args.text)
                }
                default: {
                  throw new Error(`unsupported`)
                }
              }
        }
    }
}

export default resolvers;