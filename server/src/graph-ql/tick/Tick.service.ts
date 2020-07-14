import { Intraday, IntradayIEXOnly } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import { IAdaptiveCtx } from '../../types'
import { AutoFields } from './Tick.resolver'
import { default as Tick } from './Tick.schema'
import getDataSource from '../../connectors'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getChart(symbol: string): Promise<Tick[]> {
    // if INSIGHTS_OFFLINE is enable, the period is ignored
    return iex.history(symbol, { period: '1d' }) as Promise<Array<Intraday & AutoFields>>
  }

  public async getIntradayPricing(symbol: string, lastN: number) {
    return iex.intradayIEXOnly(symbol, lastN) as Promise<Array<IntradayIEXOnly & AutoFields>>
  }
}
