import { gql } from 'apollo-server'
import companySchema from './company/Company.schema'
import fxSchema from './fx/Fx.schema'
import newsSchema from './news/News.schema'
import quoteSchema from './quote/Quote.schema'
import refSchema from './ref-data/RefData.schema'
import tickSchema from './tick/Tick.schema'
import stockSchema from './stock/Stock.schema'
import statsSchema from './stats/Stats.schema'

const baseSchema = gql`
  scalar Time
  scalar Date
  scalar DateTime
  scalar ISODateTime

  type Query {
    company(id: String!): Company!
    quote(id: ID = ""): Quote!
    markets: [Quote!]!
    getPriceHistory(id: String!): [FxPricing!]!
    news(id: ID = "", last: Int = 0): [News!]!
    symbol(market: String!, id: String!): SearchResult!
    symbols(text: String!, marketSegment: MarketSegment!): [SearchResult!]!
    stats(id: String!): Stats!
    stock(id: ID = ""): Stock!
    search(text: String!): [SearchResult!]!
  }

  type Subscription {
    getQuotes(symbols: [String!]!): Quote!
    getIntradayPrices(symbol: String!): [Intraday!]!
    getFXPriceUpdates(id: String!): FxRate!
  }
`

export default [
  baseSchema,
  companySchema,
  fxSchema,
  newsSchema,
  quoteSchema,
  refSchema,
  tickSchema,
  stockSchema,
  statsSchema,
]
