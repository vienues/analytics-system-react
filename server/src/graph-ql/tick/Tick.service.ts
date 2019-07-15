import { Intraday, IntradayIEXOnly } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import { IAdaptiveCtx } from '../../types'
import { AutoFields } from './Tick.resolver'
import { default as Tick } from './Tick.schema'

@Service()
export default class {
  public async getChart(symbol: string, ctx: IAdaptiveCtx): Promise<Tick[]> {
    // if INSIGHTS_OFFLINE is enable, the period is ignored
    return ctx.iex.history(symbol, { period: '1d' }) as Promise<Array<Intraday & AutoFields>>
  }

  public async getIntradayPricing(symbol: string, lastN: number, ctx: IAdaptiveCtx) {
    return ctx.iex.intradayIEXOnly(symbol, lastN) as Promise<Array<IntradayIEXOnly & AutoFields>>
  }
}
