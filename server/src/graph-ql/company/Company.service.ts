import { Company } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import getDataSource from '../../connectors'
import { queryResolver } from '../../utils/queryResolver'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getCompany(symbol: string) {
    return queryResolver(() => iex.company(symbol))
  }
}
