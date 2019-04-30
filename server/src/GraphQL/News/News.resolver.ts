import { Args, Query, Resolver, Ctx, ArgsType, Field, Int } from 'type-graphql'
import { default as NewsSchema } from './News.schema'
import getDataSource from '../../connectors'
import { IdInputArgs } from '../GenericArgTypes'

type Ctx = { iex: ReturnType<typeof getDataSource> }

@ArgsType()
class NewsQueryArgs extends IdInputArgs {
  @Field(() => Int)
  last: number = 0
}

@Resolver(of => NewsSchema)
export default class News {
  @Query(returns => [NewsSchema])
  async news(@Args() { id, last }: NewsQueryArgs, @Ctx() ctx: Ctx): Promise<NewsSchema[]> {
    const news = await ctx.iex.fetch<any[]>(`stock/${id}/news/${last ? `last/${last}` : ''}`)
    return news.map((item: any) => ({ id: item.url, ...item }))
  }
}
