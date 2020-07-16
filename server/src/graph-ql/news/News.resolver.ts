import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { NewsQueryArgs, NewsService } from '.'
import { IIexNewsQuery } from '../../types'
import { default as NewsSchema } from './News.schema'

export interface IAutoResolvedField {
  id: string
}

@Resolver(of => NewsSchema)
export default class News {
  constructor(private readonly newsService: NewsService) {}
  @Query(returns => [NewsSchema])
  public async news(@Args() { id, last }: NewsQueryArgs): Promise<NewsSchema[]> {
    if (last) {
      return this.newsService.getLatestNews(id, last)
    } else {
      return this.newsService.getNews(id)
    }
  }
}
