import autobahn from 'autobahn'
import { Service } from 'typedi'
import data from '../../mock-data/currencySymbols.json'
import { SearchResultSchema as SearchResult } from '../stock/Stock.schema'
import { MarketSegments } from '../ref-data/RefData.schema'
import { RxStomp, RxStompRPC } from '@stomp/rx-stomp'
import { map, tap, take, share } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { pubsub } from '../../pubsub'

interface ISymbolData {
  [key: string]: {
    name: string
    ratePrecision?: number
    pipsPosition?: number
    base?: string
    terms?: string
  }
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
  constructor() {
    this.rxStomp = new RxStomp()

    this.rxStompRPC = new RxStompRPC(this.rxStomp)

    this.rxStomp.configure({
      brokerURL: `ws://web-demo.adaptivecluster.com:80/ws`,
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
    console.log('SUBSCRIBE PRICE HISTORY CALLED')
    setInterval(() => {
      pubsub.publish(`FX_CURRENT_PRICING.${id}`, {
        Symbol: 'FxSymbol',
        Bid: 12,
        Ask: 11,
        Mid: 10,
        ValueDate: '2019T',
        CreationTimestamp: 12345678898985,
      })
    }, 2000)
    // return this.rxStompRPC
    //   .stream({
    //     destination: '/amq/queue/pricing.getPriceUpdates',
    //     body: JSON.stringify({ payload: { symbol: `${id}` }, Username: 'HHA' }),
    //   })
    //   .pipe(
    //     map(message => {
    //       return JSON.parse(message.body)
    //     }),
    //     tap(() => console.info(`Received price update for ${id}`)),
    //   )
    //   .subscribe(v => {
    //     console.log('V', v.Mid)
    //     pubsub.publish(`FX_CURRENT_PRICING.${id}`, v.Mid)
    //   })
  }

  public async unsubscribePriceUpdates(id: string) {
    console.log('UNSUB')
  }
}
