import { NewsItem } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import getDataSource  from '../../connectors'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getNews(symbol: string): Promise<NewsItem[]> {
    return iex.news(symbol) as Promise<Array<NewsItem>>
  }
  public async getLatestNews(symbol: string, last: number): Promise<NewsItem[]> {
    return iex.news(symbol, last) as Promise<Array<NewsItem>>
  }
}
