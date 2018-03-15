import marketData from '../mockData/marketListData.json'
import companyData from '../mockData/companyData.json'
import stockData from '../mockData/stockData.json'

const transformIfQuote = (data, term, func) => {
  return ['quote'].includes(term) ? func(data[term]) : data[term]
}

const ctx = {}

const modify = (ctx, curr) => {
  const decimalConversion = val => {
    return Math.round(val * 100) / 100
  }

  let result = { ...curr }
  let { symbol } = result
  let prev = ctx[symbol]

  if (prev) {
    let dir = Math.round(Math.random()) ? -1 : 1
    let delta = Math.random() * dir

    let latestPrice = prev.latestPrice + delta
    let change = latestPrice - prev.previousClose
    let percent = change / prev.previousClose

    result['latestPrice'] = decimalConversion(latestPrice)
    result['change'] = decimalConversion(change)
    result['changePercent'] = percent
  }

  ctx[symbol] = result

  return result
}

export function fetch(path) {
  let result

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
      result = data && transformIfQuote(data, term, modify.bind(null, ctx))
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
