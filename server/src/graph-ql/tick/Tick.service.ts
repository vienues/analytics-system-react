import { Service } from 'typedi'
import getDataSource from '../../connectors'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getChart(symbol: string) {
    return iex.history(symbol, { period: '1d' })
  }
}
