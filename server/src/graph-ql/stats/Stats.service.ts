import { KeyStats } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import getDataSource  from '../../connectors'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getStats(symbol: string): Promise<KeyStats> {
    const retVal = (await iex.keyStats(symbol)) as KeyStats;
    return retVal
  }
}
