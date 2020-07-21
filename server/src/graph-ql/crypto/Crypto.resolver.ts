import { IResolvers } from 'graphql-tools';
import CryptoService from './Crypto.service'
import { Container } from 'typedi'

const cryptoService = Container.get(CryptoService);

const resolvers: IResolvers = {
    Query:{
        crypto: async (parent, args: { symbol: string }, ctx) => {
          return { symbol: args.symbol };
        },
        cryptoSymbols: async (parent, args: { text: string }, ctx) => {
            return cryptoService.getSymbols(args.text);
          }
    },
    Crypto:{
        quote: async (parent) => {
             return cryptoService.getQuote(parent.symbol);
        }
    }
}

export default resolvers;