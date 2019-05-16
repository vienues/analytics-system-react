import { Service } from 'typedi'
import { IAdaptiveCtx, IIexCompanyQuery } from '../../types'
import { IAutoResolvedFields } from './Company.resolver'
import { default as CompanySchema } from './Company.schema'

@Service()
export default class {
  public async getCompany(symbol: string, ctx: IAdaptiveCtx): Promise<CompanySchema> {
    try {
      return ctx.iex.fetch<IIexCompanyQuery & IAutoResolvedFields>(`stock/${symbol}/company`)
    } catch {
      return Promise.reject(`Error`)
    }
  }
}
