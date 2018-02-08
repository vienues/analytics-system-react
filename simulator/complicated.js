
const TICKER_INTERVAL = 1000 / 1
const SUBSCRIPTIONS = {}
const INITIAL_STOCKS = {}

const stockSubscriptions = new Rx.Subject()
const ticker$ = Rx.Observable.interval(TICKER_INTERVAL, Rx.Scheduler.requestAnimationFrame)
  .map(() => ({
    time: Date.now(),
    deltaTime: null,
  }))
  .scan((previous, current) => ({
    time: current.time,
    deltaTime: (current.time - previous.time) / 1000,
  }))


const orders = new Rx.ReplaySubject(100, 500();
const trades$ = ticker$
  .withLatestFrom(orders.asObservable())
  .scan((stocks, [ticker, stock]) => {
    if (stocks[stock.id] == null) {
      stocks[stock] = stock;
    }

    return stocks
  }, SUBSCRIPTIONS)
  .distinctUntilChanged()

  const market$ = ticker$.withLatestFrom(trades$).scan((a, b) {
    console.log('market$tickerScan', a, b)

    const { meow, dog } = a
    const [ticker] = b

    return {
      meow: meow + 1,

      dog: meow + dog,
    }
  }, INITIAL_STOCKS)

  function update([ticker, paddle, objects]) {
    console.log(ticker, paddle, objects)
  }



Rx.Observable.combineLatest(ticker$, trades$, market$)
  .sampleTime(17)
  .subscribe(updateWorld)

function updateWorld([ticker, stockSubscriptions]) {
  console.log(stockSubscriptions);
}




function subscribe(id) {
  stockSubscriptions.next({
    id,
    symbol: id,
    value: _.random(0, 900, false),
  })
}

subscribe("appl")
subscribe("pizza")

export default subscribe
