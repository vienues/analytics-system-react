import { Arg, Args, Query, Resolver } from 'type-graphql'
import search from '../../services/searchIndex'
import { CryptoService } from '../crypto'
import { FxService } from '../fx'
import SearchResult from '../stock/SearchResult.schema'
import { default as SearchQueryArgs, MarketSegments } from './SearchQueryArgs'

export interface IAutoResolvedField {
  id: string
}

@Resolver(of => SearchResult)
export default class RefData {
  constructor(private readonly cryptoService: CryptoService, private readonly fxService: FxService) {}

  @Query(returns => SearchResult)
  public async symbol(@Arg('id') id: string, @Arg('market') market: MarketSegments): Promise<SearchResult> {
    switch (market.toLowerCase()) {
      case MarketSegments.STOCK: {
        const results = search(id)
        return results.find(s => s.id === id) || results[0]
      }
      case MarketSegments.CRYPTO: {
        return this.cryptoService.getSymbol(id)
      }
      case MarketSegments.FX: {
        return this.fxService.getSymbol(id)
      }
      default: {
        throw new Error(`unsupported`)
      }
    }
  }

  @Query(retuns => [SearchResult])
  public async symbols(@Args() { text, marketSegment }: SearchQueryArgs): Promise<SearchResult[]> {
    switch (marketSegment.toLowerCase()) {
      case MarketSegments.STOCK: {
        return search(text)
      }
      case MarketSegments.CRYPTO: {
        return this.cryptoService.getSymbols(text)
      }
      case MarketSegments.FX: {
        return this.fxService.getSymbols(text)
      }
      default: {
        throw new Error(`unsupported`)
      }
    }
  }
}
