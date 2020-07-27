import { gql } from 'apollo-server-express'
import companySchema from './company/Company.schema'
import cryptoSchema from './crypto/Crypto.schema'
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
    crypto(symbol: String!): Crypto!
    cryptoSymbols(text: String!): [SearchResult!]!
    getPriceHistory(from: String!, to: String!): [FxPricing!]!
    news(id: ID = "", last: Int = 0): [News!]!
    symbol(market: String!, id: String!): SearchResult!
    symbols(text: String!, marketSegment: MarketSegment!): [SearchResult!]!
    stats(id: String!): Stats!
    intradayPrices(symbol: String!, lastN: Int!): [Intraday!]!
    stock(id: ID = ""): Stock!
    OLHC(id: ID = ""): OLHC!
    search(text: String!): [SearchResult!]!
  }

  type Subscription {
    getQuotes(symbols: [String!]!): Quote!
    getIntradayPrices(symbol: String!): [Intraday!]!
    getIntradayFXRate(from: String!, to: String!): FxRate!
  }
 `;

 export default [baseSchema, companySchema, cryptoSchema, fxSchema, newsSchema, quoteSchema, refSchema, tickSchema, stockSchema, statsSchema];