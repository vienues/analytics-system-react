import { Service } from 'typedi'
import * as iex from 'iexcloud_api_wrapper'
import { queryResolver } from '../../utils/queryResolver'

@Service()
export default class {
  public async getStats(symbol: string) {
    return queryResolver(() => iex.keyStats(symbol))
  }
}
