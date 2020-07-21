import { Quote } from 'iexcloud_api_wrapper'
import moment = require('moment')
import { Service } from 'typedi'
import getDataSource from '../../connectors'
import { pubsub } from '../../pubsub'
import logger from '../../services/logger'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

interface IIntradaySubscription {
  [stockSymbol: string]: {
    listenerCount: number
  }
}

@Service()
export default class {
  private timer: NodeJS.Timeout | null = null
  private intradaySubscriptions: IIntradaySubscription = {}
  public async getQuote(symbol: string): Promise<Quote> {
    const retVal = (await iex.quote(symbol)) as Quote;
    return retVal
  }

  public async startIntradayPricingLoop(symbol: string) {
    if (this.intradaySubscriptions[symbol]) {
      this.intradaySubscriptions[symbol].listenerCount++
    } else {
      this.intradaySubscriptions[symbol] = {
        listenerCount: 1,
      }
    }
    if (!this.timer) {
      this.getIntradayPricingLoop()
    }
  }

  public stopIntradayPricingLoop(symbol: string) {
    if (this.intradaySubscriptions[symbol]) {
      this.intradaySubscriptions[symbol].listenerCount--
      if (!this.intradaySubscriptions[symbol].listenerCount) {
        delete this.intradaySubscriptions[symbol]
      }
    }
    if (!Object.keys(this.intradaySubscriptions).length && this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  private async getIntradayPricingLoop() {
    Promise.all(
      Object.keys(this.intradaySubscriptions).map(async (symbol: string) => {
        try {
          const pricing = await iex.iexApiRequest(`/stock/${symbol}/intraday-prices?chartIEXOnly=true&chartLast=5`)
          if (pricing) {
            pricing.map((price: any) => {
              price.datetime = moment(new Date().toLocaleDateString() + ' ' + price.minute)
                .utc()
                .toISOString()
              return price
            })
            pubsub.publish(`INTRADAY_PRICING.${symbol}`, pricing)
            return Promise.resolve(true)
          }
        } catch (e) {
          logger.error(`getIntradayPricingLoop: ${e.message}`)
        }
        return Promise.resolve(false)
      }),
    )
    this.timer = setTimeout(this.getIntradayPricingLoop.bind(this), 1000)
  }
}
