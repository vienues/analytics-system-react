import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const CompanyConnector = (fragment: any) =>
  graphql(
    gql`
      query HistoryQuery($id: ID!) {
        stock(id: $id) {
          id
          ...History
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

export default CompanyConnector
