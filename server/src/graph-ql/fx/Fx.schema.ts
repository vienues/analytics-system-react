import { gql } from 'apollo-server-express'
 export default gql`
    type FxCurrencies {
        code: ID!
        name: String!
    }

    type FxPairs {
        from: String!
        to: String!
    }
    
    type FxPricing {
        Pair: FxPairs!
        ask: Float!
        bid: Float!
        creationTimestamp: ISODateTime
        mid: Float!
        valueDate: Date!
    }

    type FxRate {
        date: DateTime!
        fromCurrency: String!
        toCurrency: String!
        rate: Float!
    }
    
    type FxSymbols {
        currencies: [FxCurrencies!]!
        pairs: [FxPairs!]!
    }
 `;