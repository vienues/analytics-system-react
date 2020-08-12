import { gql } from 'apollo-server'
 export default gql`
    type Config {
        isSandbox: Boolean!
    }
 `;