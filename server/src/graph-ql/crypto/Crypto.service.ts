import { Service } from 'typedi'
import getDataSource from '../../connectors'
import data from '../../mock-data/cryptoSymbols.json'
import {SearchResultSchema as SearchResult} from '../stock/Stock.schema'
import { MarketSegments } from '../ref-data/RefData.schema'
import { Quote } from 'iexcloud_api_wrapper'

interface ISymbolData {
  [key: string]: {
    name: string
  }
}

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

@Service()
export default class {
  public async getQuote(symbol: string): Promise<Quote> {
    try {
      const retVal = (await iex.iexApiRequest(`/crypto/${symbol}/quote`)) as Promise<Quote>
      return retVal
    } catch (ex) {
      throw new Error(ex)
    }
  }

  public getSymbol(id: string): SearchResult {
    const symbolData = data as ISymbolData
    return { id, name: symbolData[id].name, marketSegment: MarketSegments.CRYPTO }
  }

  public getSymbols(filterText: string): SearchResult[] {
    const symbolData = data as ISymbolData
    return Object.keys(symbolData)
      .filter((key) => key.includes(filterText) || symbolData[key].name.includes(filterText))
      .map((key) => ({ id: key, name: symbolData[key].name, marketSegment: MarketSegments.CRYPTO }))

    // try {
    //   const retVal = (await iex.iexApiRequest(`ref-data/crypto/symbols`)) as Promise<CryptoSchema>
    //   return retVal
    // } catch (ex) {
    //   throw new Error(ex)
    // }
  }
}
