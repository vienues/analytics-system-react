import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { NewsQueryArgs } from '.'
import { IAdaptiveCtx, IIexNewsQuery } from '../../types'
import { default as NewsSchema } from './News.schema'

export interface IAutoResolvedField {
  id: string
}

@Resolver(of => NewsSchema)
export default class News {
  @Query(returns => [NewsSchema])
  public async news(@Args() { id, last }: NewsQueryArgs, @Ctx() ctx: IAdaptiveCtx): Promise<NewsSchema[]> {
    return ctx.iex.fetch<Array<IIexNewsQuery & IAutoResolvedField>>(`stock/${id}/news/${last ? `last/${last}` : ''}`)
  }
}
