import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const StockNewsConnector = graphql(
  gql`
    query StockNewsConnectorQuery($id: ID!) {
      stock(id: $id) {
        id
        news(last: 5) {
          id
          datetime
          headline
          source
          url
          summary
          related
        }
      }
    }
  `,
  {
    options: ({ id }) => ({
      variables: { id },
    }),
  },
)

export default StockNewsConnector
