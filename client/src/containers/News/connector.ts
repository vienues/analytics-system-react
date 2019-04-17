import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const StockNewsConnector = (fragment: any) =>
  graphql(
    gql`
      query NewsQuery($id: ID!) {
        stock(id: $id) {
          id
          ...News
        }
      }
      ${fragment}
    `,
    {
      options: ({ id }: any) => ({
        variables: { id },
      }),
    },
  )

export default StockNewsConnector
