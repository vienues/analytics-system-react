import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { FxService } from '.'
import { IAdaptiveCtx } from '../../types'
import { default as FxPairsSchema } from './FxPairs.schema'
import { default as FxPricingSchema } from './FxPricing.schema'
import { default as FxSymbolsSchema } from './FxSymbols.schema'

@Resolver(of => FxSymbolsSchema)
export default class {
  constructor(private readonly fxService: FxService) {}

  // @Query(returns => FxSymbolsSchema)
  // public async currencySymbols(@Ctx() ctx: IAdaptiveCtx): Promise<FxSymbolsSchema> {
  //   return this.fxService.getSymbols()
  // }

  @Query(returns => [FxPricingSchema])
  public async getPriceHistory(
    @Args() { from, to }: FxPairsSchema,
    @Ctx() ctx: IAdaptiveCtx,
  ): Promise<FxPricingSchema[]> {
    const retVal = await this.fxService.getPriceHistory(from, to)
    return retVal as Promise<FxPricingSchema[]>
  }
}
