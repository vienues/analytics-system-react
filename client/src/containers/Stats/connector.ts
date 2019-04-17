import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const CompanyConnector = (fragment: any) =>
  graphql(
    gql`
      query StatsQuery($id: ID!) {
        stock(id: $id) {
          id
          ...Stats
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
