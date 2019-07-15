import { KeyStats } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import { IAdaptiveCtx } from '../../types'
import { IAutoResolvedFields } from './Stats.resolver'
import { default as StatsSchema } from './Stats.schema'

@Service()
export default class {
  public async getStats(symbol: string, ctx: IAdaptiveCtx): Promise<StatsSchema> {
    const retVal = (await ctx.iex.keyStats(symbol)) as KeyStats & IAutoResolvedFields
    return retVal
  }
}
