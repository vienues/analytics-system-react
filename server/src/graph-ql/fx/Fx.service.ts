import autobahn from 'autobahn'
import { Service } from 'typedi'
import data from '../../mock-data/currencySymbols.json'
import { pubsub } from '../../pubsub'
import logger from '../../services/logger'
import { SearchResultSchema as SearchResult } from '../stock/Stock.schema'
import { MarketSegments } from '../ref-data/RefData.schema'
import { RxStomp, RxStompRPC } from '@stomp/rx-stomp'
import { map, tap, take } from 'rxjs/operators'

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

interface IPriceHistory {
  ask: number
  bid: number
  mid: number
  creationTimestamp: number
  symbol: string
  valueDate: any
}

@Service()
export default class {
  private rxStomp: RxStomp
  private rxStompRPC: RxStompRPC
  private session: autobahn.Session | null = null
  private statusTopics: IStatusTopic = {
    priceHistory: null,
    pricing: null,
  }
  constructor() {
    this.rxStomp = new RxStomp()

    this.rxStompRPC = new RxStompRPC(this.rxStomp)

    this.rxStomp.configure({
      brokerURL: `ws://web-demo.adaptivecluster.com:80/ws`,
      debug: function (str) {
        console.log(str)
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    })

    this.rxStomp.activate()
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

  public async getPriceHistory(id: string): Promise<IPriceHistory[]> {
    return this.rxStompRPC
      .rpc({
        destination: '/amq/queue/priceHistory.getPriceHistory',
        body: JSON.stringify({ payload: `${id}`, Username: 'HHA' }),
      })
      .pipe(
        map(message => {
          return JSON.parse(message.body)
        }),
        tap(() => console.info(`Received price history for ${id}`)),
      )
      .toPromise()
  }

  public async subscribePriceUpdates(id: string) {
    if (this.session && this.statusTopics.pricing) {
      const topic = `topic_pricing_${this.makeid(6)}`
      await this.session.subscribe(topic, (args: any) => {
        pubsub.publish(`MARKET_UPDATE.${id}`, {
          symbol: `${id}`,
          change: 0,
          changePercent: 0,
          latestPrice: args[0].Mid,
        })
        logger.info(JSON.stringify(args))
      })
      await this.session.call(`${this.statusTopics.pricing}.getPriceUpdates`, [
        { payload: { symbol: id }, replyTo: topic, Username: 'NGA' },
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
