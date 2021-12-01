import { noop, Subscription } from 'rxjs'
import { connectToGateway } from '@adaptive/hydra-platform'
import { map } from 'rxjs/operators'
import { Service } from 'typedi'
import data from '../../mock-data/currencySymbols.json'
import { pubsub } from '../../pubsub'
import { MarketSegments } from '../ref-data/RefData.schema'
import { SearchResultSchema as SearchResult } from '../stock/Stock.schema'
import { PricingService } from '../../generated/TradingGateway'

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

const { Crypto } = require('@peculiar/webcrypto')

Object.assign(global, {
  WebSocket: require('ws'),
  crypto: new Crypto(),
})

@Service()
export default class {
  private fxSubscription: Subscription | null

  constructor() {
    this.fxSubscription = null

    connectToGateway({
      url: `https://reactivetrader.com/ws`,
      interceptor: noop,
      autoReconnect: true,
    })
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
    return PricingService.getPriceHistory({ symbol: id })
      .pipe(
        map(({ prices }) =>
          prices.map(price => ({
            ask: price.ask,
            bid: price.bid,
            mid: price.mid,
            creationTimestamp: Number(price.creationTimestamp),
            symbol: price.symbol,
            valueDate: price.valueDate,
          })),
        ),
      )
      .toPromise()
  }

  public subscribePriceUpdates(id: string) {
    this.fxSubscription = PricingService.getPriceUpdates({ symbol: id }).subscribe(value => {
      pubsub.publish(`FX_CURRENT_PRICING.${id}`, {
        getFXPriceUpdates: {
          Bid: value.bid,
          Ask: value.ask,
          Mid: value.mid,
          ValueDate: value.valueDate,
          CreationTimestamp: Number(value.creationTimestamp),
        },
      })
    })
  }

  public unsubscribePriceUpdates() {
    this.fxSubscription?.unsubscribe()
  }
}
