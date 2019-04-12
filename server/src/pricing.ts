import { PubSub } from 'graphql-subscriptions'
import { Observable, Subscription } from 'rxjs'
import 'rxjs/add/observable/empty'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/interval'
import { catchError, map, mergeMap } from 'rxjs/operators'
import getDataSource from './connectors/index'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

const getQuoteUrl = (symbol: string) => `stock/${symbol}/quote`
const requestQuote = (symbol: string) => iex.fetch(getQuoteUrl(symbol))

const TICK_INTERVAL = 3000

// pricing brings back same price each time
function createPriceStream(symbol: string) {
  return Observable.interval(TICK_INTERVAL).pipe(
    mergeMap(() =>
      Observable.fromPromise(requestQuote(symbol)).pipe(
        catchError(x => {
          return Observable.empty()
        }),
      ),
    ),
    map(quote => ((quote.id = quote.symbol), quote)),
  )
}

const subscriptions = new Map<string, Subscription>()

const SUBSCRIBE_TO_INDEX_UPDATES = 'SUBSCRIBE_TO_MARKET_UPDATES'

const createTopic = (symbol: string) => `MARKET_UPDATE.${symbol}`

export default function(pubSub: PubSub) {
  const onMessage = (symbols: string[]) => {
    symbols.filter(symbol => !subscriptions.has(symbol)).forEach(symbol => {
      console.info('Subscribing to:', createTopic(symbol))
      const subscription = createPriceStream(symbol).subscribe(price => {
        console.info(`published ${createTopic(symbol)} with price ${price.latestPrice}`)
        pubSub.publish(createTopic(symbol), price)
      })
      subscriptions.set(symbol, subscription)
    })
  }

  pubSub.subscribe(SUBSCRIBE_TO_INDEX_UPDATES, message => {
    onMessage.call(null, message)
  })
}
