import marketData from '../mockData/marketListData.json'
import companyData from '../mockData/companyData.json'
import mockData from '../mockData/stockData.json'

export function fetch(path) {
  let result
  let terms = path.split('/')

  if (path.match(/stock\/market/)) {
    result = marketData
  } else if (path.match(/stock\/(\w+)/)) {
    let [, symbol, term] = terms
    let company = companyData[symbol] || Object.values(companyData)[0]
    result = (company && company[term]) || mockData[term]
  } else {
    let [term] = terms
    result = mockData[term]
  }

  if (result === undefined || result === null) {
    throw new Error(`Unable to fetch data at this endpoint: ${path}`)
  }

  return Promise.resolve(result)
}
