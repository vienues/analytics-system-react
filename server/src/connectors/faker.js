const modify = (ctx, quote) => {
  const decimalConversion = val => {
    return Math.round(val * 100) / 100
  }

  let result = { ...quote }
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

const isMarketDataRequest = path => path.match(/stock\/market/)
const isStockDataRequest = path => path.match(/stock\/(\w+)/)

function fetch(sourceMap, ctx = {}) {
  return path => {
    if (isMarketDataRequest(path)) {
      return Promise.resolve(sourceMap.marketData)
    }

    if (isStockDataRequest(path)) {
      let [, symbol, term] = path.split('/')

      if (!Object.keys(sourceMap).includes(term)) {
        return Promise.reject(new Error('Unknown term'))
      }

      const dataSource = sourceMap[term]

      let result = dataSource[symbol] || Object.values(dataSource)[0]
      result = { ...result }

      if (term === 'quote') {
        result.quote = modify(ctx, result.quote) // spread
      }

      return Promise.resolve(result)
    }

    return Promise.reject(new Error("It don't work"))
  }
}

export default sourceMap => ({
  fetch: fetch(sourceMap),
})
