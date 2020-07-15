import { Quote } from 'iexcloud_api_wrapper'
import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import { CryptoService } from '.'
import { QuoteSchema } from '../quote'
import { AutoFields as QuoteAutoFields } from '../quote/Quote.resolver'
import SearchResult from '../stock/SearchResult.schema'
import { default as CryptoSchema } from './Crypto.schema'

interface IAutoResolvedFields {
  quote: QuoteSchema
}

@Resolver(of => CryptoSchema)
export default class {
  constructor(private readonly cryptoService: CryptoService) {}

  @Query(returns => CryptoSchema)
  public async crypto(@Arg('symbol') symbol: string): Promise<CryptoSchema> {
    return { symbol } as CryptoSchema
  }

  @Query(returns => [SearchResult])
  public cryptoSymbols(@Arg('text') text: string): SearchResult[] {
    return this.cryptoService.getSymbols(text)
  }

  @FieldResolver(() => QuoteSchema)
  public async quote(@Root() crypto: CryptoSchema): Promise<QuoteSchema> {
    return this.cryptoService.getQuote(crypto.symbol) as Promise<Quote & QuoteAutoFields>
  }
}
