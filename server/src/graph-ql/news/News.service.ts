import { Service } from 'typedi'
import { IAdaptiveCtx, IIexNewsQuery } from '../../types'
import { IAutoResolvedField } from './News.resolver'
import { default as NewsSchema } from './News.schema'

@Service()
export default class {
  public async getNews(symbol: string, ctx: IAdaptiveCtx): Promise<NewsSchema[]> {
    return ctx.iex.fetch<Array<IIexNewsQuery & IAutoResolvedField>>(`stock/${symbol}/news/`)
  }
  public async getLatestNews(symbol: string, last: number, ctx: IAdaptiveCtx): Promise<NewsSchema[]> {
    return ctx.iex.fetch<Array<IIexNewsQuery & IAutoResolvedField>>(`stock/${symbol}/news/last/${last}`)
  }
}
