import logger from '../services/logger'

const ERROR_MESSAGE = 'Max retries hit for query to IEX cloud'
const MIN_INTERVAL = 500
const MAX_INTERVAL = 1200

const randomInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min
}

export async function queryResolver<T>(
  fn: () => Promise<T>,
  retries: number = 5,
  interval: number = randomInterval(MIN_INTERVAL, MAX_INTERVAL),
): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    if (retries) {
      await new Promise(res => setTimeout(res, interval))
      return queryResolver(fn, retries - 1, interval * 2)
    } else {
      logger.error(ERROR_MESSAGE)
      throw new Error(ERROR_MESSAGE)
    }
  }
}
