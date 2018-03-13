import marketData from '../mockData/marketListData.json'
import companyData from '../mockData/companyData.json'
import stockData from '../mockData/stockData.json'

export function fetch(path) {
  let result
  let terms = path.split('/')

  if (path.match(/stock\/market/)) {
    result = marketData
  } else if (path.match(/stock\/(\w+)/)) {
    let sourceMap = {
      company: companyData,
      news: companyData,
      peers: companyData,
      quote: stockData,
      stats: stockData,
      chart: stockData,
    }

    let [, symbol, term] = path.split('/')
    if (Object.keys(sourceMap).includes(term)) {
      let dataSource = sourceMap[term]
      let data = dataSource[symbol] || Object.values(dataSource)[0]
      result = data && data[term]
    }
  } else {
    let [term] = path.split('/')
    result = stockData[term]
  }

  if (result === undefined || result === null) {
    throw new Error(`Unable to fetch data at this endpoint: ${path}`)
  }

  return Promise.resolve(result)
}
