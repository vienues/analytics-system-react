import { Service } from 'typedi'
import getDataSource from '../../connectors'
import { queryResolver } from '../../utils/queryResolver'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getNews(symbol: string) {
    return iex.news(symbol)
  }
  public async getLatestNews(symbol: string, last: number) {
    return queryResolver(() => iex.news(symbol, last))
  }
}
