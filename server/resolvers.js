import fetch from 'node-fetch';

const ENDPOINT = 'https://api.iextrading.com/1.0';

async function fetchAndParse(url) {
  const response = await fetch(url);
  return await response.json();
}

export default {
  Query: {
    async stockData(_, { symbol }) {
      const response = fetchAndParse(`${ENDPOINT}/stock/${symbol}/stats`);
      return (response.symbol = symbol), response;
    },
    symbols: async () => fetchAndParse(`${ENDPOINT}/ref-data/symbols`),
  },
  Stock: {
    id: stock => stock.symbol,
    relatedNews: async ({ symbol }) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/news/`),
    peers: async ({ symbol }) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/peers/`),
    price: async ({ symbol }) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/price/`),
    quote: async ({ symbol }) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/quote/`),
  },
  News: {
    id: article => article.url,
  },
};
