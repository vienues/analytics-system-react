import { Service } from 'typedi'
import { IAdaptiveCtx, IIexQuoteQuery } from '../../types'
import { AutoFields } from './Quote.resolver'
import { default as Quote } from './Quote.schema'

@Service()
export default class {
  public async getQuote(symbol: string, ctx: IAdaptiveCtx): Promise<Quote> {
    return ctx.iex.fetch<IIexQuoteQuery & AutoFields>(`stock/${symbol}/quote`)
  }
}
