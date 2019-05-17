import { Quote } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import { IAdaptiveCtx } from '../../types'
import { AutoFields } from './Quote.resolver'
import { default as QuoteSchema } from './Quote.schema'

@Service()
export default class {
  public async getQuote(symbol: string, ctx: IAdaptiveCtx): Promise<QuoteSchema> {
    return ctx.iex.quote(symbol) as Promise<Quote & AutoFields>
  }
}
