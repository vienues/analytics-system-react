import { Arg, Args, Ctx, Query, Resolver } from 'type-graphql'
import search from '../../services/searchIndex'
import { IAdaptiveCtx, IIexNewsQuery } from '../../types'
import { CryptoService } from '../crypto'
import { FxService } from '../fx'
import { default as SearchResultSchema } from '../stock/SearchResult.schema'
import { default as SearchQueryArgs, MarketSegments } from './SearchQueryArgs'

export interface IAutoResolvedField {
  id: string
}

@Resolver(of => SearchResultSchema)
export default class RefData {
  constructor(private readonly cryptoService: CryptoService, private readonly fxService: FxService) {}

  @Query(returns => SearchResultSchema)
  public async symbol(@Arg('id') id: string, @Arg('market') market: MarketSegments) {
    switch (market) {
      case MarketSegments.STOCK:
        {
          return search(id)[0]
        }
        break
      case MarketSegments.CRYPTO:
        {
          return this.cryptoService.getSymbol(id)
        }
        break
      case MarketSegments.CURRENCY: {
        return this.fxService.getSymbol(id)
      }
      default: {
        throw new Error(`unsupported`)
      }
    }
  }

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
      case MarketSegments.CURRENCY: {
        return this.fxService.getSymbols(text)
      }
      default: {
        throw new Error(`unsupported`)
      }
    }
  }
}
