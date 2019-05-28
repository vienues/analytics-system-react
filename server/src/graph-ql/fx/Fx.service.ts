import { Service } from 'typedi'
import getDataSource from '../../connectors'
import { IAdaptiveCtx } from '../../types'
import { FxSymbolsSchema } from './'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getSymbols(): Promise<FxSymbolsSchema> {
    try {
      const retVal = (await iex.iexApiRequest(`/ref-data/symbols`)) as Promise<FxSymbolsSchema>
      return retVal
    } catch (ex) {
      throw new Error(ex)
    }
  }
}
