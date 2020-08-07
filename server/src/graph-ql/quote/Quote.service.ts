import { Quote } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import getDataSource from '../../connectors'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getQuote(symbol: string): Promise<Quote> {
    return (await iex.quote(symbol)) as Quote
  }
}
