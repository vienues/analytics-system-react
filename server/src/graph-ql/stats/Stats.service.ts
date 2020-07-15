import { KeyStats } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import { IAutoResolvedFields } from './Stats.resolver'
import { default as StatsSchema } from './Stats.schema'
import getDataSource  from '../../connectors'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getStats(symbol: string): Promise<StatsSchema> {
    const retVal = (await iex.keyStats(symbol)) as KeyStats & IAutoResolvedFields
    return retVal
  }
}
