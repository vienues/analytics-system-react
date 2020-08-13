export interface IRefSymbol {
  id: string
  symbol: string
  marketPercent: number
  volume: number
  name: string
}

export interface IIexQuoteQuery {
  symbol: string
  companyName: string
  primaryExchange: string
  sector: string
  calculationPrice: string
  open: number
  openTime: number
  close: number
  closeTime: number
  high: number
  low: number
  latestPrice: number
  latestSource: string
  latestTime: string
  latestUpdate: number
  latestVolume: number
  iexRealtimePrice: number
  iexRealtimeSize: number
  iexLastUpdated: number
  delayedPrice: number
  delayedPriceTime: number
  extendedPrice: number
  extendedChange: number
  extendedChangePercent: number
  extendedPriceTime: number
  previousClose: number
  change: number
  changePercent: number
  iexMarketPercent: number
  iexVolume: number
  avgTotalVolume: number
  iexBidPrice: number
  iexBidSize: number
  iexAskPrice: number
  iexAskSize: number
  marketCap: number
  peRatio?: number
  week52High: number
  week52Low: number
  ytdChange: number
}

export interface IIexBatchQuote {
  [key: string]: { quote: IIexQuoteQuery }
}
