/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CompanyQuery
// ====================================================

export interface CompanyQuery_stock_company {
  __typename: 'Company'
  id: string
  symbol: string | null
  name: string | null
  exchange: string | null
  industry: string | null
  website: string | null
  description: string | null
  CEO: string | null
  issueType: string | null
  sector: string | null
}

export interface CompanyQuery_stock {
  __typename: 'Stock'
  id: string
  company: CompanyQuery_stock_company | null
  peers: (string | null)[] | null
}

export interface CompanyQuery {
  stock: CompanyQuery_stock | null
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
  label: string | null
  datetime: any | null
  average: number | null
  low: number | null
  high: number | null
}

export interface HistoryQuery_stock_quote {
  __typename: 'Quote'
  previousClose: number | null
}

export interface HistoryQuery_stock {
  __typename: 'Stock'
  id: string
  chart: (HistoryQuery_stock_chart | null)[] | null
  quote: HistoryQuery_stock_quote | null
}

export interface HistoryQuery {
  stock: HistoryQuery_stock | null
}

export interface HistoryQueryVariables {
  id: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onMarketSubscription
// ====================================================

export interface onMarketSubscription_getQuotes {
  __typename: 'Quote'
  id: string | null
  change: number | null
  changePercent: number | null
  latestPrice: number | null
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

export interface NewsQuery_stock_news {
  __typename: 'News'
  id: string
  datetime: string | null
  headline: string | null
  source: string | null
  url: string | null
  summary: string | null
  related: string | null
}

export interface NewsQuery_stock {
  __typename: 'Stock'
  id: string
  news: (NewsQuery_stock_news | null)[] | null
}

export interface NewsQuery {
  stock: NewsQuery_stock | null
}

export interface NewsQueryVariables {
  id: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QuoteQuery
// ====================================================

export interface QuoteQuery_markets {
  __typename: 'Quote'
  id: string | null
  companyName: string | null
  change: number | null
  changePercent: number | null
  latestPrice: number | null
}

export interface QuoteQuery {
  markets: QuoteQuery_markets[]
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onQuoteQuery
// ====================================================

export interface onQuoteQuery_getQuotes {
  __typename: 'Quote'
  id: string | null
  changePercent: number | null
  latestPrice: number | null
}

export interface onQuoteQuery {
  getQuotes: onQuoteQuery_getQuotes
}

export interface onQuoteQueryVariables {
  markets: string[]
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchQuery
// ====================================================

export interface searchQuery_stock_company {
  __typename: 'Company'
  id: string
  name: string | null
  exchange: string | null
}

export interface searchQuery_stock {
  __typename: 'Stock'
  id: string
  company: searchQuery_stock_company | null
}

export interface searchQuery {
  stock: searchQuery_stock | null
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
  marketcap: number | null
  peRatioLow: number | null
  peRatioHigh: number | null
  week52low: number | null
  week52high: number | null
  latestEPS: number | null
  dividendRate: number | null
  dividendYield: number | null
}

export interface StatsQuery_stock_quote {
  __typename: 'Quote'
  id: string | null
  low: number | null
  high: number | null
  open: number | null
  previousClose: number | null
  latestVolume: number | null
  avgTotalVolume: number | null
}

export interface StatsQuery_stock {
  __typename: 'Stock'
  id: string
  stats: StatsQuery_stock_stats | null
  quote: StatsQuery_stock_quote | null
}

export interface StatsQuery {
  stock: StatsQuery_stock | null
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
  name: string | null
}

export interface StockPriceQuery_stock_quote {
  __typename: 'Quote'
  id: string | null
  change: number | null
  changePercent: number | null
  latestPrice: number | null
}

export interface StockPriceQuery_stock {
  __typename: 'Stock'
  id: string
  company: StockPriceQuery_stock_company | null
  quote: StockPriceQuery_stock_quote | null
}

export interface StockPriceQuery {
  stock: StockPriceQuery_stock | null
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
  id: string
  symbol: string | null
  name: string | null
  exchange: string | null
  industry: string | null
  website: string | null
  description: string | null
  CEO: string | null
  issueType: string | null
  sector: string | null
}

export interface Company {
  __typename: 'Stock'
  company: Company_company | null
  peers: (string | null)[] | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: History
// ====================================================

export interface History_chart {
  __typename: 'Tick'
  label: string | null
  datetime: any | null
  average: number | null
  low: number | null
  high: number | null
}

export interface History_quote {
  __typename: 'Quote'
  previousClose: number | null
}

export interface History {
  __typename: 'Stock'
  chart: (History_chart | null)[] | null
  quote: History_quote | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: News
// ====================================================

export interface News_news {
  __typename: 'News'
  id: string
  datetime: string | null
  headline: string | null
  source: string | null
  url: string | null
  summary: string | null
  related: string | null
}

export interface News {
  __typename: 'Stock'
  news: (News_news | null)[] | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Stats
// ====================================================

export interface Stats_stats {
  __typename: 'StockStats'
  marketcap: number | null
  peRatioLow: number | null
  peRatioHigh: number | null
  week52low: number | null
  week52high: number | null
  latestEPS: number | null
  dividendRate: number | null
  dividendYield: number | null
}

export interface Stats_quote {
  __typename: 'Quote'
  id: string | null
  low: number | null
  high: number | null
  open: number | null
  previousClose: number | null
  latestVolume: number | null
  avgTotalVolume: number | null
}

export interface Stats {
  __typename: 'Stock'
  stats: Stats_stats | null
  quote: Stats_quote | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
