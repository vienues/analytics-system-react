/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CompanyQuery
// ====================================================

export interface CompanyQuery_stock_company {
  __typename: 'Company'
  symbol: string
  name: string
  website: string
  description: string
}

export interface CompanyQuery_stock {
  __typename: 'Stock'
  id: string
  company: CompanyQuery_stock_company
  peers: string[]
}

export interface CompanyQuery {
  stock: CompanyQuery_stock
}

export interface CompanyQueryVariables {
  id: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HistoryQuery
// ====================================================

export interface HistoryQuery_stock_chart {
  __typename: 'Tick'
  label: string
  datetime: any
  average: number
  low: number
  high: number
}

export interface HistoryQuery_stock_quote {
  __typename: 'Quote'
  id: string
  previousClose: number
}

export interface HistoryQuery_stock {
  __typename: 'Stock'
  id: string
  chart: HistoryQuery_stock_chart[]
  quote: HistoryQuery_stock_quote
}

export interface HistoryQuery {
  stock: HistoryQuery_stock
}

export interface HistoryQueryVariables {
  id: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MarketQuery
// ====================================================

export interface MarketQuery_markets {
  __typename: 'Quote'
  id: string
  companyName: string
  change: number
  changePercent: number
  latestPrice: number
}

export interface MarketQuery {
  markets: MarketQuery_markets[]
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onMarketSubscription
// ====================================================

export interface onMarketSubscription_getQuotes {
  __typename: 'Quote'
  id: string
  change: number
  changePercent: number
  latestPrice: number
}

export interface onMarketSubscription {
  getQuotes: onMarketSubscription_getQuotes
}

export interface onMarketSubscriptionVariables {
  markets: string[]
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NewsQuery
// ====================================================

export interface NewsQuery_news {
  __typename: 'News'
  id: string
  datetime: string
  headline: string
  source: string
  url: string
  summary: string
  related: string
}

export interface NewsQuery {
  news: NewsQuery_news[]
}

export interface NewsQueryVariables {
  id: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PeersQuery
// ====================================================

export interface PeersQuery_stock {
  __typename: 'Stock'
  id: string
  peers: string[]
}

export interface PeersQuery {
  stock: PeersQuery_stock
}

export interface PeersQueryVariables {
  id: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onStockPriceSubscription
// ====================================================

export interface onStockPriceSubscription_getQuotes {
  __typename: 'Quote'
  id: string
  change: number
  changePercent: number
  latestPrice: number
}

export interface onStockPriceSubscription {
  getQuotes: onStockPriceSubscription_getQuotes
}

export interface onStockPriceSubscriptionVariables {
  markets: string[]
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QuoteQuery
// ====================================================

export interface QuoteQuery_markets {
  __typename: 'Quote'
  id: string
  companyName: string
  change: number
  changePercent: number
  latestPrice: number
}

export interface QuoteQuery {
  markets: QuoteQuery_markets[]
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchQuery
// ====================================================

export interface searchQuery_stock_company {
  __typename: 'Company'
  id: string
  name: string
  exchange: string
}

export interface searchQuery_stock {
  __typename: 'Stock'
  id: string
  company: searchQuery_stock_company
}

export interface searchQuery {
  stock: searchQuery_stock
}

export interface searchQueryVariables {
  id: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: search
// ====================================================

export interface search_search {
  __typename: 'SearchResult'
  id: string
  name: string
}

export interface search {
  search: search_search[]
}

export interface searchVariables {
  text: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: StatsQuery
// ====================================================

export interface StatsQuery_stock_stats {
  __typename: 'StockStats'
  marketcap: number
  peRatioLow: number
  peRatioHigh: number
  week52low: number
  week52high: number
  latestEPS: number
  dividendRate: number
  dividendYield: number
}

export interface StatsQuery_stock_quote {
  __typename: 'Quote'
  id: string
  low: number
  high: number
  open: number
  previousClose: number
  latestVolume: number
  avgTotalVolume: number
}

export interface StatsQuery_stock {
  __typename: 'Stock'
  id: string
  stats: StatsQuery_stock_stats
  quote: StatsQuery_stock_quote
}

export interface StatsQuery {
  stock: StatsQuery_stock
}

export interface StatsQueryVariables {
  id: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: StockPriceQuery
// ====================================================

export interface StockPriceQuery_stock_company {
  __typename: 'Company'
  id: string
  name: string
}

export interface StockPriceQuery_stock_quote {
  __typename: 'Quote'
  id: string
  change: number
  changePercent: number
  latestPrice: number
}

export interface StockPriceQuery_stock {
  __typename: 'Stock'
  id: string
  company: StockPriceQuery_stock_company
  quote: StockPriceQuery_stock_quote
}

export interface StockPriceQuery {
  stock: StockPriceQuery_stock
}

export interface StockPriceQueryVariables {
  id: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Company
// ====================================================

export interface Company_company {
  __typename: 'Company'
  symbol: string
  name: string
  website: string
  description: string
}

export interface Company {
  __typename: 'Stock'
  company: Company_company
  peers: string[]
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: History
// ====================================================

export interface History_chart {
  __typename: 'Tick'
  label: string
  datetime: any
  average: number
  low: number
  high: number
}

export interface History_quote {
  __typename: 'Quote'
  id: string
  previousClose: number
}

export interface History {
  __typename: 'Stock'
  chart: History_chart[]
  quote: History_quote
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: News
// ====================================================

export interface News {
  __typename: 'News'
  id: string
  datetime: string
  headline: string
  source: string
  url: string
  summary: string
  related: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Peers
// ====================================================

export interface Peers {
  __typename: 'Stock'
  peers: string[]
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Stats
// ====================================================

export interface Stats_stats {
  __typename: 'StockStats'
  marketcap: number
  peRatioLow: number
  peRatioHigh: number
  week52low: number
  week52high: number
  latestEPS: number
  dividendRate: number
  dividendYield: number
}

export interface Stats_quote {
  __typename: 'Quote'
  id: string
  low: number
  high: number
  open: number
  previousClose: number
  latestVolume: number
  avgTotalVolume: number
}

export interface Stats {
  __typename: 'Stock'
  stats: Stats_stats
  quote: Stats_quote
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
