import * as _ from 'lodash'
import Rx from 'rxjs'

export default function createRandomInterval(then, { min = 32, max = 196 } = {}) {
  let id,
    cancel = () => clearTimeout(id)

  id = setTimeout(() => {
    cancel = createRandomInterval(then)
    then()
  }, _.random(min, max, false))

  return () => cancel()
}

export function createUpdatedSymbol({ direction, magnitude, value, ...rest }) {
  if (direction > 0 || magnitude > 1 / 10000 || _.random(true) < 0.75) {
    direction = direction && _.random(true) < 0.95 ? direction : _.random() ? 1 : -1
    magnitude =
      magnitude && _.random(true) < 0.8
        ? magnitude
        : 1 / _.sample([100, ..._.times(3).fill(1000), ..._.times(6).fill(10000)])
    value = Number.parseFloat(value)

    return {
      ...rest,
      direction,
      magnitude,
      value: (value + direction * magnitude * _.random(0, value, false)).toFixed(2),
    }
  }
}

const TICKER_INTERVAL = 17
const INITIAL_OBJECTS = {
  meow: 1,
  dog: 'woof',
}

const ticker$ = Rx.Observable.interval(TICKER_INTERVAL, Rx.Scheduler.requestAnimationFrame)
  .map(() => ({
    time: Date.now(),
    deltaTime: null,
  }))
  .scan((previous, current) => ({
    time: current.time,
    deltaTime: (current.time - previous.time) / 1000,
  }))

const keydownSubject = new Rx.Subject()
const keyupSubject = new Rx.Subject()
keydownSubject.subscribe(x => {
  console.log('keydown:', x)
})
keyupSubject.subscribe(x => {
  console.log('keyup:', x)
})

global.setInterval(() => keydownSubject.next(_.random(-1, 1, false)), 1000)
global.setInterval(() => keyupSubject.next(0), 1500)

const input$ = Rx.Observable.merge(keydownSubject.asObservable(), keyupSubject.asObservable()).distinctUntilChanged()

const paddle$ = ticker$
  .withLatestFrom(input$)
  .scan((position, [ticker, direction]) => {
    console.log({ position, ticker, direction })
    return position + direction
  }, 20)
  .distinctUntilChanged()

function objects$tickerScan(a, b) {
  console.log('objects$tickerScan', a, b)
  const { meow, dog } = a
  const [ticker] = b

  return {
    meow: meow + 1,
    dog: meow + dog,
  }
}
const objects$ = ticker$.withLatestFrom(paddle$).scan(objects$tickerScan, INITIAL_OBJECTS)

function update([ticker, paddle, objects]) {
  console.log(ticker, paddle, objects)
}

const game = Rx.Observable.combineLatest(ticker$, paddle$, objects$)
  // .sample(Rx.Observable.interval(17))
  .sampleTime(17)
  .subscribe(update)
