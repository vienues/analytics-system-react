import { Service } from 'typedi'
import data from '../../mock-data/currencySymbols.json'
import { SearchResultSchema as SearchResult } from '../stock/Stock.schema'
import { MarketSegments } from '../ref-data/RefData.schema'
import { RxStomp, RxStompRPC } from '@stomp/rx-stomp'
import { map, tap } from 'rxjs/operators'
import { pubsub } from '../../pubsub'
import logger from '../../services/logger'

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

interface PriceUpdates {
  Symbol: string
  Bid: number
  Ask: number
  Mid: number
  ValueDate: any
  CreationTimestamp: number
}

@Service()
export default class {
  private rxStomp: RxStomp
  private rxStompRPC: RxStompRPC
  private currentFX: string[]
  constructor() {
    this.currentFX = []
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
      )
      .toPromise()
  }

  public subscribePriceUpdates(id: string) {
    if (!this.currentFX?.includes(id)) {
      this.rxStompRPC
        .stream({
          destination: '/amq/queue/pricing.getPriceUpdates',
          body: JSON.stringify({ payload: { symbol: `${id}` }, Username: 'HHA' }),
        })
        .pipe(
          map(message => {
            return JSON.parse(message.body)
          })
        )
        .subscribe((value: PriceUpdates) => {
          pubsub.publish(`FX_CURRENT_PRICING.${id}`, {
            getFXPriceUpdates: {
              Bid: value.Bid,
              Ask: value.Ask,
              Mid: value.Mid,
              ValueDate: value.ValueDate,
              CreationTimestamp: value.CreationTimestamp,
            },
          })
        })
      this.currentFX?.push(id)
    }
  }
}
