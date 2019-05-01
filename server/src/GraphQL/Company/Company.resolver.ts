import { Arg, FieldResolver, Mutation, Query, Resolver, Root, Ctx, UseMiddleware } from 'type-graphql'
import { default as CompanySchema } from './Company.schema'
import getDataSource from '../../connectors'

type Ctx = { iex: ReturnType<typeof getDataSource> }

@Resolver(of => CompanySchema)
export default class Company {
  @Query(returns => CompanySchema)
  async company(@Arg('id') id: string, @Ctx() ctx: Ctx): Promise<CompanySchema> {
    return ctx.iex.fetch<any>(`stock/${id}/company`)
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
