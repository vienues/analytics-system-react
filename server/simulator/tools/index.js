import _ from 'lodash';

export function createRandomInterval(then, { min = 32, max = 196 } = {}) {
  let id,
    cancel = () => clearTimeout(id)

  id = setTimeout(() => {
    cancel = createRandomInterval(then)
    then()
  }, _.random(min, max, false))

  return () => cancel()
}

export function createUpdatedSymbol(stock) {
  let { direction, magnitude, price, ...rest } = stock;

  if (direction > 0 || magnitude > 1 / 10000 || _.random(true) < 0.75) {
    direction = direction && _.random(true) < 0.95 ? direction : _.random() ? 1 : -1
    magnitude =
      magnitude && _.random(true) < 0.8
        ? magnitude
        : 1 / _.sample([100, ..._.times(3).fill(1000), ..._.times(6).fill(10000)])
    price = Number.parseFloat(price)

    return {
      ...rest,
      direction,
      magnitude,
      price: (price + direction * magnitude * _.random(0, price, false)).toFixed(2),
    }
  }

  return stock;
}
