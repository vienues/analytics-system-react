const isMarketDataRequest = path => path.match(/stock\/market/)
const isStockDataRequest = path => path.match(/stock\/(\w+)/)
const fetchCompanyData = (store, symbol) => store[symbol] || Object.values(store)[0]
const decimalConversion = val => Math.round(val * 100) / 100

const modify = (ctx, quote) => {
  let result = { ...quote }
  const { symbol } = result
  const prev = ctx[symbol]

  if (prev) {
    const dir = Math.round(Math.random()) ? -1 : 1
    const delta = Math.random() * dir

    const latestPrice = prev.latestPrice + delta
    const change = latestPrice - prev.previousClose
    const percent = change / prev.previousClose

    result['latestPrice'] = decimalConversion(latestPrice)
    result['change'] = decimalConversion(change)
    result['changePercent'] = percent
  }

  ctx[symbol] = result

  return result
}

const fetch = (dataStore, context = {}) => path => {
  if (isMarketDataRequest(path)) {
    return Promise.resolve(dataStore.marketData)
  }

  if (isStockDataRequest(path)) {
    const [, symbol, resource] = path.split('/')

    if (!Object.keys(dataStore).includes(resource)) {
      return Promise.reject(new Error('Unrecognized request'))
    }

    const store = dataStore[resource]
    const companyData = fetchCompanyData(store, symbol)

    if (resource === 'quote') {
      const quote = modify(context, companyData.quote)
      return Promise.resolve(quote)
    }

    return Promise.resolve(companyData[resource])
  }

  return Promise.reject(new Error('Unrecognized request'))
}

export default sourceMap => ({
  fetch: fetch(sourceMap),
})
