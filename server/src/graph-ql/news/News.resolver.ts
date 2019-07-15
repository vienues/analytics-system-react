import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { NewsQueryArgs, NewsService } from '.'
import { IAdaptiveCtx, IIexNewsQuery } from '../../types'
import { default as NewsSchema } from './News.schema'

export interface IAutoResolvedField {
  id: string
}

@Resolver(of => NewsSchema)
export default class News {
  constructor(private readonly newsService: NewsService) {}
  @Query(returns => [NewsSchema])
  public async news(@Args() { id, last }: NewsQueryArgs, @Ctx() ctx: IAdaptiveCtx): Promise<NewsSchema[]> {
    if (last) {
      return this.newsService.getLatestNews(id, last, ctx)
    } else {
      return this.newsService.getNews(id, ctx)
    }
  }
}
