import { gql } from 'apollo-server-express'
 export default gql`
    type Company {
        id: ID!
        name: String
        symbol: String!
        exchange: String
        industry: String
        website: String
        description: String
        CEO: String
        issueType: String
        sector: String
    }
 `;