import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import { IAdaptiveCtx } from '../../types'
import Company from '../company/Company.schema'
import CompanyService from '../company/Company.service'
import { default as StatsSchema } from './Stats.schema'
import StatsService from './Stats.service'

export interface IAutoResolvedFields {
  id: string
  company: Company
  revenuePerEmployee?: number
}

@Resolver(of => StatsSchema)
export default class Stats {
  constructor(private readonly statsService: StatsService, private readonly companyService: CompanyService) {}

  @Query(returns => StatsSchema)
  public async stats(@Arg('id') id: string, @Ctx() ctx: IAdaptiveCtx): Promise<StatsSchema> {
    return this.statsService.getStats(id, ctx)
  }

  @FieldResolver()
  public async company(@Root() stats: StatsSchema, @Ctx() ctx: IAdaptiveCtx): Promise<Company> {
    return this.companyService.getCompany(stats.id, ctx)
  }
}
