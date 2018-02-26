import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const CompanyConnector = fragment =>
  graphql(
    gql`
      query StockTickerConnectorQuery($id: ID!) {
        stock(id: $id) {
          id
          ...History
        }
      }
      ${fragment}
    `,
    {
      options: ({ id }) => ({
        variables: { id },
      }),
    },
  )

export default CompanyConnector
