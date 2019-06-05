import { Service } from 'typedi'
import { IAdaptiveCtx, IIexChart1d } from '../../types'
import { AutoFields } from './Tick.resolver'
import { default as Tick } from './Tick.schema'

@Service()
export default class {
  public async getChart(symbol: string, ctx: IAdaptiveCtx): Promise<Tick[]> {
    return ctx.iex.fetch<Array<IIexChart1d & AutoFields>>(`stock/${symbol}/chart/1d`)
  }
}
