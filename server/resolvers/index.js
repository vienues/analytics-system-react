import fetch from 'node-fetch'

import date from './date'

const ENDPOINT = 'https://api.iextrading.com/1.0'

async function fetchAndParse(url) {
  return (await fetch(url)).json()
}

export default {
  ...date,
  Query: {
    async stockData(_, { symbol }) {
      const response = fetchAndParse(`${ENDPOINT}/stock/${symbol}/stats`)
      return (response.symbol = symbol), response
    },
    symbols: () => fetchAndParse(`${ENDPOINT}/ref-data/symbols`),
  },
  Stock: {
    id: stock => stock.symbol,
    peers: ({ symbol }) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/peers/`),
    price: ({ symbol }) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/price/`),
    quote: ({ symbol }) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/quote/`),
    relatedNews: ({ symbol }) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/news/`),
  },
  News: {
    id: article => article.url,
  },
}
