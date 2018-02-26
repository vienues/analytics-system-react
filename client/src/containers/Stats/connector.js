import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const CompanyConnector = fragment =>
  graphql(
    gql`
      query StockStatsConnectorQuery($id: ID!) {
        stock(id: $id) {
          id
          ...Stats
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
