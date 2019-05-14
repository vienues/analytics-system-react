import { Service } from 'typedi'
import { IAdaptiveCtx, IIexStatsQuery } from '../../types'
import { IAutoResolvedFields } from './Stats.resolver'
import { default as CompanySchema } from './Stats.schema'

@Service()
export default class {
  public async getStats(symbol: string, ctx: IAdaptiveCtx): Promise<CompanySchema> {
    return ctx.iex.fetch<IIexStatsQuery & IAutoResolvedFields>(`stock/${symbol}/stats`)
  }
}
