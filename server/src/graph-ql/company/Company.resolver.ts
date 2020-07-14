import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import { IAdaptiveCtx, IIexCompanyQuery } from '../../types'
import { default as CompanySchema } from './Company.schema'
import CompanyService from './Company.service'

export interface IAutoResolvedFields {
  id: string
  name: string
  // https://github.com/schardtbc/iexcloud_api_wrapper/issues/3
  CEO: string
}

@Resolver(of => CompanySchema)
export default class Company {
  constructor(private readonly companyService: CompanyService) {}

  @Query(returns => CompanySchema)
  public async company(@Arg('id') id: string): Promise<CompanySchema> {
    return this.companyService.getCompany(id)
  }

  @FieldResolver()
  public name(@Root() { companyName }: IIexCompanyQuery) {
    return companyName
  }
}
