import fetch from 'node-fetch';
import { PubSub } from 'graphql-subscriptions';
import * as Ix from 'ix';

import date from './date';

const ENDPOINT = 'https://api.iextrading.com/1.0';
const max = 66;
const min = 62;

async function* gen() {
  while (true) {
    yield new Promise((resolve) => {
      setInterval(() => {
        resolve({
          indices: [{
            id: 'DOWJONES',
            name: "Dow Jones",
            change: randomPrice(),
            volume: randomPrice(),
          }]
        })
      }, 1000)
    })
  }
}


const randomPrice = () => (Math.random() * (max - min) + min).toFixed(2)

async function fetchAndParse(url) {
  return (await fetch(url)).json();
}

export default {
  ...date,
  Subscription: {
    indices: {
      subscribe: () => Ix.AsyncIterable.from(gen())
    }
  },
  Query: {
    async stock(_, {symbol}) {
      return {
        ...(await fetchAndParse(`${ENDPOINT}/stock/${symbol}/stats`)),
        symbol,
      };
    },
    symbols: () => fetchAndParse(`${ENDPOINT}/ref-data/symbols`),
  },
  Stock: {
    id: stock => stock.symbol,
    peers: ({symbol}) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/peers/`),
    price: ({symbol}) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/price/`),
    quote: ({symbol}) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/quote/`),
    relatedNews: ({symbol}) => fetchAndParse(`${ENDPOINT}/stock/${symbol}/news/`),
  },
  News: {
    id: article => article.url,
  },
};
