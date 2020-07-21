import { gql } from 'apollo-server-express'
 export default gql`
    type Crypto {
        symbol: ID!
        name: String!
        quote: Quote!
    }
 `;