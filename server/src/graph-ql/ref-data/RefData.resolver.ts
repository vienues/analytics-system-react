import { Args, Ctx, Query, Resolver } from 'type-graphql'
import search from '../../services/searchIndex'
import { IAdaptiveCtx, IIexNewsQuery } from '../../types'
import { CryptoService } from '../crypto'
import { default as SearchResultSchema } from '../stock/SearchResult.schema'
import { default as SearchQueryArgs, MarketSegments } from './SearchQueryArgs'

export interface IAutoResolvedField {
  id: string
}

@Resolver(of => SearchResultSchema)
export default class RefData {
  constructor(private readonly cryptoService: CryptoService) {}

  @Query(retuns => [SearchResultSchema])
  public async symbols(@Args() { text, marketSegment }: SearchQueryArgs) {
    switch (marketSegment) {
      case MarketSegments.STOCK:
        {
          return search(text)
        }
        break
      case MarketSegments.CRYPTO:
        {
          return this.cryptoService.getSymbols(text)
        }
        break
      default: {
        throw new Error(`unsupported`)
      }
    }
  }
}
