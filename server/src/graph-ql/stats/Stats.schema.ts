import { gql } from 'apollo-server-express'
 export default gql`
    type Stats {
        id: ID!
        symbol: String!
        company: Company
        companyName: String
        marketcap: Float
        week52high: Float
        week52low: Float
        week52change: Float
        sharesOutstanding: Float
        float: Float
        avg10Volume: Int
        avg30Volume: Int
        day200MovingAvg: Float
        day50MovingAvg: Float
        employees: Int
        ttmEPS: Float
        ttmDividendRate: Float
        dividendYield: Float
        nextDividendDate: Date
        exDividendDate: Date
        nextEarningsDate: Date
        peRatio: Float
        beta: Float
        maxChangePercent: Float
        year5ChangePercent: Float
        year2ChangePercent: Float
        year1ChangePercent: Float
        ytdChangePercent: Float
        month6ChangePercent: Float
        month3ChangePercent: Float
        month1ChangePercent: Float
        day30ChangePercent: Float
        day5ChangePercent: Float
    }
 `;