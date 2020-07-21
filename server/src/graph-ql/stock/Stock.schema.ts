import { gql } from 'apollo-server-express'
import { MarketSegments } from '../ref-data/RefData.schema';

export interface SearchResultSchema {
   id: string
   name: string
   marketSegment: MarketSegments
}

 export default gql`
  type OLHC {
    symbol: ID!
    open: Float
    close: Float
    openTime: ISODateTime
    closeTime: ISODateTime
    high: Float
    low: Float
  }

  type Previous {
    symbol: ID!
    date: Date!
    open: Float!
    high: Float!
    low: Float!
    close: Float!
    volume: Int!
    unadjustedVolume: Int!
    change: Float!
    changePercent: Float!
    vwap: Float!
  }

  type SearchResult {
    id: ID!
    name: String!
    marketSegment: String!
  }

  type Stock {
    id: ID!
    symbol: String!
    price: Float!
    stats: Stats!
    peers: [String!]!
    chart: [Tick!]!
    company: Company!
    quote: Quote!
    news(last: Float!): [News!]!
    previous: Previous!
  }
 `;