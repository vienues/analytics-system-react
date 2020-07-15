import { Args, Ctx, Query, Resolver, Subscription } from 'type-graphql'
import { FxService } from '.'
import { default as FxPairsSchema } from './FxPairs.schema'
import { default as FxPricingSchema } from './FxPricing.schema'
import { default as FxSymbolsSchema } from './FxSymbols.schema'

@Resolver(of => FxSymbolsSchema)
export default class {
  constructor(private readonly fxService: FxService) {}

  @Query(returns => [FxPricingSchema])
  public async getPriceHistory(
    @Args() { from, to }: FxPairsSchema
  ): Promise<FxPricingSchema[]> {
    const retVal = await this.fxService.getPriceHistory(from, to)
    this.fxService.subscribePriceUpdates(from, to)
    return retVal as Promise<FxPricingSchema[]>
  }
}
