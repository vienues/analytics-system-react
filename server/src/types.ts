import getDataSource from './connectors'

export type AdaptiveCtx = { iex: ReturnType<typeof getDataSource> }

export interface RefSymbol {
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
  peRatio: number
  week52High: number
  week52Low: number
  ytdChange: number
}

export interface IIexBatchQuote {
  [key: string]: { quote: IIexQuoteQuery }
}

export interface IIexCompanyQuery {
  symbol: string
  companyName: string
  exchange: string
  industry: string
  website: string
  description: string
  CEO: string
  issueType: string
  sector: string
  tags: string[]
}

export interface IIexStatsQuery {
  companyName: string
  marketcap: number
  beta: number
  week52high: number
  week52low: number
  week52change: number
  shortInterest: number
  shortDate: number
  dividendRate: number
  dividendYield: number
  exDividendDate: string
  latestEPS: number
  latestEPSDate: string
  sharesOutstanding: number
  float: number
  returnOnEquity: number
  consensusEPS: number
  numberOfEstimates: number
  EPSSurpriseDollar?: any
  EPSSurprisePercent: number
  symbol: string
  EBITDA: number
  revenue: number
  grossProfit: number
  cash: number
  debt: number
  ttmEPS: number
  revenuePerShare: number
  revenuePerEmployee: number
  peRatioHigh: number
  peRatioLow: number
  returnOnAssets: number
  returnOnCapital?: any
  profitMargin: number
  priceToSales: number
  priceToBook: number
  day200MovingAvg: number
  day50MovingAvg: number
  institutionPercent: number
  insiderPercent?: any
  shortRatio?: any
  year5ChangePercent: number
  year2ChangePercent: number
  year1ChangePercent: number
  ytdChangePercent: number
  month6ChangePercent: number
  month3ChangePercent: number
  month1ChangePercent: number
  day5ChangePercent: number
  day30ChangePercent: number
}

export interface IIexChart1d {
  date: string
  minute: string
  label: string
  high: number
  low: number
  average: number
  volume: number
  notional: number
  numberOfTrades: number
  marketHigh: number
  marketLow: number
  marketAverage: number
  marketVolume: number
  marketNotional: number
  marketNumberOfTrades: number
  open: number
  close: number
  marketOpen?: number
  marketClose?: number
  changeOverTime: number
  marketChangeOverTime: number
}

export interface IIexNewsQuery {
  datetime: string
  headline: string
  source: string
  url: string
  summary: string
  related: string
  image: string
}
