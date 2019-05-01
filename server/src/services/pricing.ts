import { PubSub } from 'graphql-subscriptions'
import getDataSource from '../connectors'
import { IIexBatchQuote } from '../types'

const SUBSCRIBE_TO_INDEX_UPDATES = 'SUBSCRIBE_TO_MARKET_UPDATES'
const UNSUBSCRIBE_TO_INDEX_UPDATES = 'UNSUBSCRIBE_TO_MARKET_UPDATES'
const TICK_INTERVAL = 3000

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

const createTopic = (symbol: string) => `MARKET_UPDATE.${symbol}`

interface MarketSubscription {
  [stockSymbol: string]: {
    listenerCount: number
  }
}

const MarketSubscriptions: MarketSubscription = {}

const getPricing = async (symbols: string[]): Promise<IIexBatchQuote> => {
  return iex.fetch<IIexBatchQuote>(`stock/market/batch?symbols=${symbols.join(',')}&types=quote`)
}

export default function(pubsub: PubSub) {
  let timer: NodeJS.Timeout | null
  let isExecuting = false

  const executor = async () => {
    const prices = await getPricing(Object.keys(MarketSubscriptions))
    Object.values(prices).forEach(price => {
      console.log(`publishing ${createTopic(price.quote.symbol)}`)
      pubsub.publish(createTopic(price.quote.symbol), price.quote)
    })
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
