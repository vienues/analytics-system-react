import autobahn from 'autobahn'
import { Service } from 'typedi'
import getDataSource from '../../connectors'
import data from '../../mock-data/currencySymbols.json'
import { pubsub } from '../../pubsub'
import logger from '../../services/logger'
import { IAdaptiveCtx } from '../../types'
import SearchResult from '../stock/SearchResult.schema'
import { FxSymbolsSchema } from './'

const iex = getDataSource(process.env.INSIGHTS_OFFLINE)

interface ISymbolData {
  [key: string]: {
    name: string
    ratePrecision?: number
    pipsPosition?: number
    base?: string
    terms?: string
  }
}

interface IStatusTopic {
  [key: string]: string | null
}

interface IPreviousMid {
  [key: string]: number | null
}

@Service()
export default class {
  private connection: autobahn.Connection
  private session: autobahn.Session | null = null
  private statusTopics: IStatusTopic = {
    priceHistory: null,
    pricing: null,
  }
  private context: IPreviousMid = {}
  constructor() {
    this.connection = new autobahn.Connection({
      realm: 'com.weareadaptive.reactivetrader',
      url: 'ws://web-demo.adaptivecluster.com:80/ws',
    })
    this.connection.onopen = async (session: any) => {
      this.session = session
      const topicsNeeded = { ...this.statusTopics }
      if (this.session) {
        const statusSubscription = await this.session.subscribe('status', async (args: any) => {
          if (args[0].Type in topicsNeeded) {
            delete topicsNeeded[args[0].Type]
            this.statusTopics[args[0].Type] = args[0].Instance
          }
          if (!Object.keys(topicsNeeded).length) {
            statusSubscription.unsubscribe()
          }
        })
      }
    }
    this.connection.open()
  }

  public getSymbol(id: string): SearchResult {
    const symbolData = data as ISymbolData
    return { id, ...symbolData[id] }
  }

  public getSymbols(filterText: string): SearchResult[] {
    const symbolData = data as ISymbolData
    return Object.keys(symbolData)
      .filter(key => key.includes(filterText) || symbolData[key].name.includes(filterText))
      .map(key => ({ id: key, ...symbolData[key] }))
  }

  public async getPriceHistory(from: string, to: string) {
    if (this.session && this.statusTopics.priceHistory) {
      return await this.session.call(`${this.statusTopics.priceHistory}.getPriceHistory`, [
        { payload: `${from}${to}`, replyTo: '', Username: 'NGA' },
      ])
    } else {
      throw new Error(`connection not ready`)
    }
  }

  public async subscribePriceUpdates(from: string, to: string) {
    if (this.session && this.statusTopics.pricing) {
      const topic = `topic_pricing_${this.makeid(6)}`
      await this.session.subscribe(topic, (args: any) => {
        pubsub.publish(`MARKET_UPDATE.${from}/${to}`, {
          symbol: `${from}/${to}`,
          change: 0,
          changePercent: 0,
          latestPrice: args[0].Mid,
        })
        logger.info(JSON.stringify(args))
      })
      await this.session.call(`${this.statusTopics.pricing}.getPriceUpdates`, [
        { payload: { symbol: `${from}${to}` }, replyTo: topic, Username: 'NGA' },
      ])
    }
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
