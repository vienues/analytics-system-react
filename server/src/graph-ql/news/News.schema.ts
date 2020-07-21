import { gql } from 'apollo-server-express'
 export default gql`
    type News {
        id: ID!
        datetime: ISODateTime!
        headline: String!
        source: String!
        url: String!
        summary: String!
        related: String!
    }
 `;