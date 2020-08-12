import { gql } from 'apollo-server'
 export default gql`
    type Crypto {
        symbol: ID!
        name: String!
        quote: Quote!
    }
 `;