import * as real from './iex'
import faker from './faker'

import companyData from '../mock-data/companyData.json'
import stockData from '../mock-data/stockData.json'
import marketData from '../mock-data/marketListData.json'

const fakeIex = faker({
  company: companyData,
  news: companyData,
  peers: companyData,
  quote: stockData,
  stats: stockData,
  chart: stockData,
  marketData,
})

export default function getDataSource(offlineMode?: string) {
  return offlineMode && offlineMode.match(/true/i) ? fakeIex : real
}
