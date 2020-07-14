import { IEXCompany } from 'iexcloud_api_wrapper'
import { Service } from 'typedi'
import { IAdaptiveCtx } from '../../types'
import { IAutoResolvedFields } from './Company.resolver'
import { default as CompanySchema } from './Company.schema'
import getDataSource  from '../../connectors'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getCompany(symbol: string): Promise<CompanySchema> {
    return iex.company(symbol) as Promise<IEXCompany & IAutoResolvedFields>
  }
}
