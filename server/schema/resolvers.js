import news from './newsData'
import prices from './priceData'
import stock from './stockData'

export default {
  Query: {
    stockInfo: (id)=> stock,
  },
  Stock: {
    relatedNews(stock){
      return news
    },
    historicalPrices(stock){
      return prices
    }
  }
};


