import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { FxService } from '.'
import { IAdaptiveCtx } from '../../types'
import { default as FxSymbolsSchema } from './FxSymbols.schema'

@Resolver(of => FxSymbolsSchema)
export default class {
  constructor(private readonly fxService: FxService) {}

  @Query(returns => FxSymbolsSchema)
  public async currencySymbols(@Ctx() ctx: IAdaptiveCtx): Promise<FxSymbolsSchema> {
    return this.fxService.getSymbols()
  }
}
