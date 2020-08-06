import { Quote } from 'iexcloud_api_wrapper'
import moment = require('moment')
import { Service } from 'typedi'
import getDataSource from '../../connectors'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getQuote(symbol: string): Promise<Quote> {
    const retVal = (await iex.quote(symbol)) as Quote
    return retVal
  }
}
