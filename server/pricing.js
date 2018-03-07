import { createLogger } from 'bunyan'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/interval'
import { Observable } from 'rxjs/Observable'
import { map, mergeMap } from 'rxjs/operators'
import getDataSource from './connectors'

const log = createLogger({ name: 'PRICING-SERVER' })
const iex = getDataSource(process.env.OFFLINE)

const getQuoteUrl = symbol => `stock/${symbol}/quote`
const requestQuote = symbol => iex.fetch(getQuoteUrl(symbol))

function createPriceStream(symbol) {
  return Observable.interval(300000).pipe(
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
      log.info('Subscribing to:', createTopic(symbol))
      const subscription = createPriceStream(symbol).subscribe(price => {
        pubsub.publish(createTopic(symbol), price)
      })
      subscriptions.set(symbol, subscription)
    })
  }

  pubsub.subscribe(SUBSCRIBE_TO_INDEX_UPDATES, message => {
    log.info('1:', message)

    onMessage.call(null, message)
  })
}
