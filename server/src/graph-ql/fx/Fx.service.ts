import autobahn from 'autobahn'
import { Service } from 'typedi'
import getDataSource from '../../connectors'
import data from '../../mock-data/currencySymbols.json'
import logger from '../../services/logger'
import { IAdaptiveCtx } from '../../types'
import SearchResult from '../stock/SearchResult.schema'
import { FxSymbolsSchema } from './'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

interface ISymbolData {
  [key: string]: {
    name: string
  }
}

@Service()
export default class {
  private connection: autobahn.Connection
  private session: autobahn.Session | null = null

  constructor() {
    this.connection = new autobahn.Connection({
      realm: 'com.weareadaptive.reactivetrader',
      url: 'ws://web-demo.adaptivecluster.com:80/ws',
    })
    this.connection.onopen = async (session: any) => {
      this.session = session
    }
    this.connection.open()
  }

  public getSymbol(id: string): SearchResult {
    const symbolData = data as ISymbolData
    return { id, name: symbolData[id].name }
  }

  public getSymbols(filterText: string): SearchResult[] {
    const symbolData = data as ISymbolData
    return Object.keys(symbolData)
      .filter(key => key.includes(filterText) || symbolData[key].name.includes(filterText))
      .map(key => ({ id: key, name: symbolData[key].name }))
    // try {
    //   const retVal = (await iex.iexApiRequest(`/ref-data/symbols`)) as Promise<FxSymbolsSchema>
    //   return retVal
    // } catch (ex) {
    //   throw new Error(ex)
    // }
  }

  public async getPriceHistory(from: string, to: string) {
    return new Promise(async (resolve, reject) => {
      if (this.session) {
        const statusSubscription = await this.session.subscribe('status', async (args: any) => {
          if (args[0].Type === 'priceHistory') {
            if (this.session) {
              this.session.unsubscribe(statusSubscription)
              try {
                const results = await this.session.call(`${args[0].Instance}.getPriceHistory`, [
                  { payload: `${from}${to}`, replyTo: '', Username: 'NGA' },
                ])
                resolve(results)
              } catch (ex) {
                logger.error(`getPriceHistory error: ${JSON.stringify(ex)}`)
                reject(ex)
              }
            } else {
              reject(`Connection closed`)
            }
          }
        })
      } else {
        reject(`Connection closed`)
      }
    })
  }

  public async subscribePriceUpdates(from: string, to: string) {
    return new Promise(async (resolve, reject) => {
      if (this.session) {
        const statusSubscription = await this.session.subscribe('status', async (args: any) => {
          if (args[0].Type === 'pricing') {
            if (this.session) {
              this.session.unsubscribe(statusSubscription)
              try {
                const topic = `topic_pricing_${this.makeid(6)}`
                const results = await this.session.subscribe(topic, (topicArgs: any) => {
                  logger.info(JSON.stringify(topicArgs))
                  resolve(topicArgs)
                })
                try {
                  const test = await this.session.call(`${args[0].Instance}.getPriceUpdates`, [
                    { payload: `${from}${to}`, replyTo: topic, Username: 'NGA' },
                  ])
                  logger.info(test)
                } catch (e) {
                  logger.error(e)
                }
              } catch (ex) {
                logger.error(`getPricingUpdates error: ${JSON.stringify(ex)}`)
              }
            }
          }
        })
      }
    })
  }

  private makeid(length: number) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }
}
