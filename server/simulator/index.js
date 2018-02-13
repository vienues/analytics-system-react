import * as _ from 'lodash'
import Rx from 'rxjs'
import { interval } from 'rxjs/observable/interval'

import { createUpdatedSymbol } from './tools'

const TICKER_INTERVAL = 1000 / 0.5

const stockSimulations = new Rx.ReplaySubject()
const simulatedUpdates = new Rx.ReplaySubject()
const stockTicker$ = Rx.Observable.interval(TICKER_INTERVAL)
  .withLatestFrom(stockSimulations.asObservable())
  .scan((market, [loop, stocks]) => {
    if (stocks) {
      (Array.isArray(stocks) ? stocks : [stocks]).map(stock => {
        stock.id = stock.id || stock.symbol
        market[stock.id] = stock
      })
    }

    const update = _.sampleSize(market, _.random(_.size(market)))
      .map(createUpdatedSymbol)
      .reduce((acc, v) => {
        acc[v.id] = v
        return acc
      }, {})

    simulatedUpdates.next(update)
    // console.log("stockTicker$", _.size(update));

    return {
      ...market,
      ...update
    }
  }, {})

// stockTicker$.subscribe(() => console.log("tick"))
export function simulate(stocks) {
  stockSimulations.next(stocks)
}

export function subscribe(subscription) {
  return simulatedUpdates.subscribe(subscription)
}
