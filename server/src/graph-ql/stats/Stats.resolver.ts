import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import Company from '../company/Company.schema'
import CompanyService from '../company/Company.service'
import { default as StatsSchema } from './Stats.schema'
import StatsService from './Stats.service'

export interface IAutoResolvedFields {
  id: string
  company: Company

  // https://github.com/schardtbc/iexcloud_api_wrapper/issues/3
  ttmEPS: number
  ttmDividendRate: number
  dividendYield: number
  nextDividendDate: string
  exDividendDate: string
  nextEarningsDate: string
  peRatio: number
  beta: number
}

@Resolver(of => StatsSchema)
export default class Stats {
  constructor(private readonly statsService: StatsService, private readonly companyService: CompanyService) {}

  @Query(returns => StatsSchema)
  public async stats(@Arg('id') id: string): Promise<StatsSchema> {
    return this.statsService.getStats(id)
  }
  @FieldResolver()
  public async company(@Root() stats: StatsSchema): Promise<Company> {
    return this.companyService.getCompany(stats.id)
  }
}
