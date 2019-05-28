import { Service } from 'typedi'
import getDataSource from '../../connectors'
import { IAdaptiveCtx } from '../../types'
import { QuoteSchema } from '../quote'
import { CryptoSchema } from './'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getQuote(symbol: string): Promise<QuoteSchema> {
    try {
      const retVal = (await iex.iexApiRequest(`/crypto/${symbol}/quote`)) as Promise<QuoteSchema>
      return retVal
    } catch (ex) {
      throw new Error(ex)
    }
  }

  public async getSymbols(): Promise<CryptoSchema> {
    try {
      const retVal = (await iex.iexApiRequest(`ref-data/crypto/symbols`)) as Promise<CryptoSchema>
      return retVal
    } catch (ex) {
      throw new Error(ex)
    }
  }
}
