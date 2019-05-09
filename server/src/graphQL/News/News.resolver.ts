import { Args, Query, Resolver, Ctx, ArgsType, Field, Int, FieldResolver, Root } from 'type-graphql'
import { default as NewsSchema } from './News.schema'
import { IdInputArgs } from '../GenericArgTypes'
import { IIexNewsQuery, AdaptiveCtx } from '../../types'

export interface AutoResolvedField {
  id: string
}

@ArgsType()
class NewsQueryArgs extends IdInputArgs {
  @Field(() => Int)
  last: number = 0
}

@Resolver(of => NewsSchema)
export default class News {
  @Query(returns => [NewsSchema])
  async news(@Args() { id, last }: NewsQueryArgs, @Ctx() ctx: AdaptiveCtx): Promise<NewsSchema[]> {
    return ctx.iex.fetch<IIexNewsQuery[] & AutoResolvedField[]>(`stock/${id}/news/${last ? `last/${last}` : ''}`)
  }

  @FieldResolver()
  id(@Root() newsArticle: NewsSchema) {
    return newsArticle.url
  }
}
