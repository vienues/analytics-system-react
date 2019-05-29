import { Service } from 'typedi'
import getDataSource from '../../connectors'
import data from '../../mock-data/cryptoSymbols.json'
import { IAdaptiveCtx } from '../../types'
import { QuoteSchema } from '../quote'
import SearchResult from '../stock/SearchResult.schema'
import { CryptoSchema } from './'

interface ISymbolData {
  [key: string]: {
    name: string
  }
}

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

  public getSymbols(filterText: string): SearchResult[] {
    const symbolData = data as ISymbolData
    return Object.keys(symbolData)
      .filter(key => key.includes(filterText) || symbolData[key].name.includes(filterText))
      .map(key => ({ id: key, name: symbolData[key].name }))

    // try {
    //   const retVal = (await iex.iexApiRequest(`ref-data/crypto/symbols`)) as Promise<CryptoSchema>
    //   return retVal
    // } catch (ex) {
    //   throw new Error(ex)
    // }
  }
}
