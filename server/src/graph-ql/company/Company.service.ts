import { Service } from 'typedi'
import * as iex from 'iexcloud_api_wrapper'
import { queryResolver } from '../../utils/queryResolver'

@Service()
export default class {
  public async getCompany(symbol: string) {
    return queryResolver(() => iex.company(symbol))
  }
}
