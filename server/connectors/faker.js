import * as iex from './iex'
import marketData from '../data/marketList.json'
import mockData from '../data/stockData.json'

export function fetch(path, options) {
  let query = path
    .split('/')
    .slice(2)
    .join('_')

  switch (query) {
    case 'batch?symbols=spy,dia,iwm&types=quote':
      return new Promise(resolve => resolve(marketData))
    case 'company':
      return new Promise(resolve => resolve(mockData.company))
    case 'quote':
      return new Promise(resolve => resolve(mockData.quote))
    case 'stats':
      return new Promise(resolve => resolve(mockData.stats))
    case 'peers':
      return new Promise(resolve => resolve(mockData.peers))
    case 'chart_1d':
      return new Promise(resolve => resolve(mockData.chart_1d))
    case 'news_last_5':
      return new Promise(resolve => resolve(mockData.news_last_5))
    default:
      return iex.fetch(path, options)
  }
}
