import news from './newsData'
import prices from './priceData'
import stock from './stockData'
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const max = 66;
const min = 62;

const randomPrice = () => (Math.random() * (max - min) + min).toFixed(2)

setInterval(() => {
  pubsub.publish('latestPrice', {
    latestPrice: {
      "date": "2017-09-18",
      "open": randomPrice(),
      "high": randomPrice(),
      "low": randomPrice(),
      "close": randomPrice(),
      "adjClose": randomPrice(),
      "volume": 129148893
    }
  })
}, 1000)

export default {
  Query: {
    stockInfo: (id) => stock,
  },
  Subscription: {
    latestPrice: {
      subscribe: () => {
        return pubsub.asyncIterator('latestPrice')
      }
    }
  },
  Stock: {
    relatedNews(stock) {
      return news
    },
    historicalPrices(stock) {
      return prices
    },
    latestPrice(stock){
      return {
        "date": "2017-09-18",
        "open": randomPrice(),
        "high": randomPrice(),
        "low": randomPrice(),
        "close": randomPrice(),
        "adjClose": randomPrice(),
        "volume": 129148893
      }
    }
  }
};


