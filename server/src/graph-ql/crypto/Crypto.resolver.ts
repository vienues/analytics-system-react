import { Quote } from 'iexcloud_api_wrapper'
import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import { CryptoService } from '.'
import data from '../../mock-data/cryptoSymbols.json'
import { IAdaptiveCtx, IIexNewsQuery } from '../../types'
import { QuoteSchema } from '../quote'
import { AutoFields as QuoteAutoFields } from '../quote/Quote.resolver'
import SearchResult from '../stock/SearchResult.schema'
import { default as CryptoSchema } from './Crypto.schema'

interface IAutoResolvedFields {
  quote: QuoteSchema
}

interface ISymbolData {
  [key: string]: {
    name: string
  }
}

@Resolver(of => CryptoSchema)
export default class News {
  constructor(private readonly cryptoService: CryptoService) {}

  @Query(returns => CryptoSchema)
  public async crypto(@Arg('symbol') symbol: string, @Ctx() ctx: IAdaptiveCtx): Promise<CryptoSchema> {
    return { symbol } as CryptoSchema
  }

  @Query(returns => [SearchResult])
  public cryptoSymbols(@Arg('text') text: string): SearchResult[] {
    const symbolData = data as ISymbolData
    return Object.keys(symbolData)
      .filter(key => key.includes(text) || symbolData[key].name.includes(text))
      .map(key => ({ id: key, name: symbolData[key].name }))
  }

  @FieldResolver(() => QuoteSchema)
  public async quote(@Root() crypto: CryptoSchema): Promise<QuoteSchema> {
    return this.cryptoService.getQuote(crypto.symbol) as Promise<Quote & QuoteAutoFields>
  }
}
