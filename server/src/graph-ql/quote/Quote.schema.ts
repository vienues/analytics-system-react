import { gql } from 'apollo-server-express'
 export default gql`
 type Quote {
    id: ID!
    symbol: String!
    company: Company
    companyName: String
    calculationPrice: String
    open: Float
    openTime: ISODateTime
    close: Float
    closeTime: ISODateTime
    high: Float
    low: Float
    latestPrice: Float
    latestSource: String
    latestTime: Time
    latestUpdate: ISODateTime
    latestVolume: Float
    iexRealtimePrice: Float
    iexRealtimeSize: Int
    iexLastUpdated: ISODateTime
    delayedPrice: Float
    delayedPriceTime: ISODateTime
    previousClose: Float
    change: Float
    changePercent: Float
    iexMarketPercent: Float
    iexVolume: Int
    avgTotalVolume: Int
    iexBidPrice: Float
    iexBidSize: Int
    iexAskPrice: Float
    iexAskSize: Int
    marketCap: Float
    peRatio: Float
    week52High: Float
    week52Low: Float
    ytdChange: Float
  }
 `;