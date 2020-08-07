import { gql } from 'apollo-server-express'
export default gql`
  type FxCurrencies {
    code: ID!
    name: String!
  }

  type FxSymbol {
    id: String!
  }

  type FxPricing {
    Pair: FxSymbol!
    ask: Float!
    bid: Float!
    creationTimestamp: Float!
    mid: Float!
    valueDate: ISODateTime!
  }

  type FxRate {
    Symbol: FxSymbol!
    Bid: Float
    Ask: Float
    Mid: Float
    ValueDate: ISODateTime
    CreationTimestamp: Float
  }

  type FxSymbols {
    currencies: [FxCurrencies!]!
    pairs: [FxSymbol!]!
  }
`
