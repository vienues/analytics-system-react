import { NewsItem } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import { IAdaptiveCtx } from '../../types'
import { IAutoResolvedField } from './News.resolver'
import { default as NewsSchema } from './News.schema'

@Service()
export default class {
  public async getNews(symbol: string, ctx: IAdaptiveCtx): Promise<NewsSchema[]> {
    return ctx.iex.news(symbol) as Promise<Array<NewsItem & IAutoResolvedField>>
  }
  public async getLatestNews(symbol: string, last: number, ctx: IAdaptiveCtx): Promise<NewsSchema[]> {
    return ctx.iex.news(symbol, last) as Promise<Array<NewsItem & IAutoResolvedField>>
  }
}
