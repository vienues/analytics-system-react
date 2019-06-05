import companyData from '../mock-data/companyData.json'
import marketData from '../mock-data/marketListData.json'
import stockData from '../mock-data/stockData.json'
import faker from './faker'
import * as real from './iex'

const fakeIex = faker({
  chart: stockData,
  company: companyData,
  marketData,
  news: companyData,
  peers: companyData,
  quote: stockData,
  stats: stockData,
})

export default function getDataSource(offlineMode?: string) {
  return offlineMode && offlineMode.match(/true/i) ? fakeIex : real
}
