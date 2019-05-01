import { Arg, FieldResolver, Query, Resolver, Root, Ctx } from 'type-graphql'
import { default as CompanySchema } from './Company.schema'
import { IIexCompanyQuery, AdaptiveCtx } from '../../types'

export interface AutoResolvedFields {
  id: string
  name: string
}

@Resolver(of => CompanySchema)
export default class Company {
  @Query(returns => CompanySchema)
  async company(@Arg('id') id: string, @Ctx() ctx: AdaptiveCtx): Promise<CompanySchema> {
    return ctx.iex.fetch<IIexCompanyQuery & AutoResolvedFields>(`stock/${id}/company`)
  }

  @FieldResolver()
  name(@Root() { companyName }: any) {
    return companyName
  }

  @FieldResolver()
  id(@Root() { companyName }: any) {
    return companyName
  }
}
