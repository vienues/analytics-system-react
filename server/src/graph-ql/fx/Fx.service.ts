import autobahn from 'autobahn'
import { Service } from 'typedi'
import data from '../../mock-data/currencySymbols.json'
import { pubsub } from '../../pubsub'
import logger from '../../services/logger'
import { SearchResultSchema as SearchResult } from '../stock/Stock.schema'
import { MarketSegments } from '../ref-data/RefData.schema'
import { Client, Message } from '@stomp/stompjs'

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
  private client: Client
  private session: autobahn.Session | null = null
  private statusTopics: IStatusTopic = {
    priceHistory: null,
    pricing: null,
  }
  constructor() {
    this.client = new Client()

    this.client.configure({
      brokerURL: `ws://web-demo.adaptivecluster.com:80/ws`,
      debug: function (str) {
        console.log(str)
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: message => {
        console.log('onConnect', message)

        this.client.subscribe('status', message => {
          console.log(message)
        })
      },
    })

    this.client.onStompError = function (frame) {
      console.log('There is an error: ' + frame.headers['message'])
      console.log('Additional details: ' + frame.body)
    }

    this.client.activate()
  }

  public getSymbol(id: string): SearchResult {
    const symbolData = data as ISymbolData
    return { id, marketSegment: MarketSegments.FX, ...symbolData[id] }
  }

  public getSymbols(filterText: string): SearchResult[] {
    const symbolData = data as ISymbolData
    return Object.keys(symbolData)
      .filter(key => key.includes(filterText) || symbolData[key].name.includes(filterText))
      .map(key => ({ id: key, marketSegment: MarketSegments.FX, ...symbolData[key] }))
  }

  public async getPriceHistory(from: string, to: string) {
    this.client.publish({
      destination: 'getPriceHistory',
      body: JSON.stringify({ payload: { symbol: `AAAAAA` }, replyTo: '', Username: 'NGA' }),
    })

    this.client.subscribe('getPriceHistory', m => {
      console.log('A message has arrived:', m)
    })
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
