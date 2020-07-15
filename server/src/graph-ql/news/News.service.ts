import { NewsItem } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import { IAutoResolvedField } from './News.resolver'
import { default as NewsSchema } from './News.schema'
import getDataSource  from '../../connectors'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getNews(symbol: string): Promise<NewsSchema[]> {
    return iex.news(symbol) as Promise<Array<NewsItem & IAutoResolvedField>>
  }
  public async getLatestNews(symbol: string, last: number): Promise<NewsSchema[]> {
    return iex.news(symbol, last) as Promise<Array<NewsItem & IAutoResolvedField>>
  }
}
