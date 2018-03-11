import { createLogger } from 'bunyan'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/interval'
import { Observable } from 'rxjs/Observable'
import { map, mergeMap } from 'rxjs/operators'
import getDataSource from './connectors'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

const getQuoteUrl = symbol => `stock/${symbol}/quote`
const requestQuote = symbol => iex.fetch(getQuoteUrl(symbol))

// pricing brings back same price each time
function createPriceStream(symbol) {
  return Observable.interval(5000).pipe(
    mergeMap(() => Observable.fromPromise(requestQuote(symbol))),
    map(quote => ((quote.id = quote.symbol), quote)),
  )
}

const subscriptions = new Map()
const SUBSCRIBE_TO_INDEX_UPDATES = 'SUBSCRIBE_TO_MARKET_UPDATES'

const createTopic = symbol => `MARKET_UPDATE.${symbol}`

export default function(pubsub) {
  const onMessage = symbols => {
    symbols.filter(symbol => !subscriptions.has(symbol)).forEach(symbol => {
      console.info('Subscribing to:', createTopic(symbol))
      const subscription = createPriceStream(symbol).subscribe(price => {
        console.info(`published ${createTopic(symbol)} with price ${price.latestPrice}`)
        pubsub.publish(createTopic(symbol), price)
      })
      subscriptions.set(symbol, subscription)
    })
  }

  pubsub.subscribe(SUBSCRIBE_TO_INDEX_UPDATES, message => {
    onMessage.call(null, message)
  })
}
