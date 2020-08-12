import { gql } from 'apollo-server'
 export default gql`
 type Intraday {
    date: Date
    minute: Time
    datetime: ISODateTime
    high: Float
    low: Float
    average: Float
    open: Float
    close: Float
    volume: Float
    notional: Float
    numberOfTrades: Int
  }

  type Tick {
    date: Date!
    minute: Time!
    datetime: ISODateTime!
    label: String!
    high: Float
    low: Float
    average: Float
    open: Float
    close: Float
    volume: Float!
    notional: Float!
    numberOfTrades: Float!
    changeOverTime: Float!
    marketHigh: Float!
    marketLow: Float!
    marketAverage: Float!
    marketVolume: Float!
    marketNotional: Float!
    marketNumberOfTrades: Float!
    marketChangeOverTime: Float!
  }
  
 `;