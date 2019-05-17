import { IEXCompany } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import { IAdaptiveCtx } from '../../types'
import { IAutoResolvedFields } from './Company.resolver'
import { default as CompanySchema } from './Company.schema'

@Service()
export default class {
  public async getCompany(symbol: string, ctx: IAdaptiveCtx): Promise<CompanySchema> {
    return ctx.iex.company(symbol) as Promise<IEXCompany & IAutoResolvedFields>
  }
}
