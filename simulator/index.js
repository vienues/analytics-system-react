import * as _ from 'lodash'
import Rx from 'rxjs'
import { interval } from 'rxjs/observable/interval'

import { createUpdatedSymbol } from './tools'

const TICKER_INTERVAL = 1000 / 60
const SUBSCRIPTIONS = {}
const STOCKS = {}

const ticker$ = interval(TICKER_INTERVAL).scan(stocks => {
  stocks = stocks || STOCKS

  return {
    ...stocks,
    ..._.sampleSize(stocks, _.random(_.size(STOCKS)))
      .map(createUpdatedSymbol)
      .reduce((acc, v) => {
        acc[v.id] = v
        return acc
      }, {}),
  }
})

export function simulate(stock) {
  STOCKS[stock.id] = STOCKS[stock.id] || createUpdatedSymbol({ price: _.random(0, 500, false), ...stock })
}

export function subscribe(subscription) {
  return ticker$.subscribe(subscription)
}
