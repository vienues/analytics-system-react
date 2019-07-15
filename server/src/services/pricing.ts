import { PubSub } from 'graphql-subscriptions'
import getDataSource from '../connectors'
import { IIexBatchQuote } from '../types'
import logger from './logger'

const SUBSCRIBE_TO_INDEX_UPDATES = 'SUBSCRIBE_TO_MARKET_UPDATES'
const UNSUBSCRIBE_TO_INDEX_UPDATES = 'UNSUBSCRIBE_TO_MARKET_UPDATES'
const TICK_INTERVAL = 3000

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

const createTopic = (symbol: string) => `MARKET_UPDATE.${symbol}`

interface IMarketSubscription {
  [stockSymbol: string]: {
    listenerCount: number
  }
}

const MarketSubscriptions: IMarketSubscription = {}

const getPricing = async (symbols: string[]): Promise<IIexBatchQuote> => {
  // the current iexcloud_api_wrapper does not support batch operations so making a direct call
  return iex.iexApiRequest(`/stock/market/batch?symbols=${symbols.join(',')}&types=quote`)
}

export default function(pubsub: PubSub) {
  let timer: NodeJS.Timeout | null
  let isExecuting = false

  const executor = async () => {
    try {
      const prices = await getPricing(Object.keys(MarketSubscriptions))
      if (prices) {
        Object.values(prices).forEach(price => {
          if (price.quote) {
            logger.info(`publishing ${createTopic(price.quote.symbol)}`)
            pubsub.publish(createTopic(price.quote.symbol), price.quote)
          } else {
            logger.error(`Pricing error happened, price exists but Quote does not on object ${JSON.stringify(price)}`)
          }
        })
      }
    } catch (e) {
      logger.error(`Error: ${e.message}`)
    }
    timer = setTimeout(executor, TICK_INTERVAL)
  }

  pubsub.subscribe(SUBSCRIBE_TO_INDEX_UPDATES, (symbols: string[]) => {
    symbols.forEach(symbol => {
      if (MarketSubscriptions[symbol]) {
        MarketSubscriptions[symbol].listenerCount++
      } else {
        MarketSubscriptions[symbol] = {
          listenerCount: 1,
        }
      }
    })

    if (!isExecuting) {
      isExecuting = true
      executor()
    }
  })

  pubsub.subscribe(UNSUBSCRIBE_TO_INDEX_UPDATES, (symbols: string[]) => {
    symbols.forEach(symbol => {
      if (MarketSubscriptions[symbol]) {
        MarketSubscriptions[symbol].listenerCount--
        if (!MarketSubscriptions[symbol].listenerCount) {
          delete MarketSubscriptions[symbol]
        }
      }
    })
    if (!Object.keys(MarketSubscriptions).length && timer) {
      clearInterval(timer)
      timer = null
      isExecuting = false
    }
  })
}
