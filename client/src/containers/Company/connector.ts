import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const CompanyConnector = (fragment: any) =>
  graphql(
    gql`
      query CompanyQuery($id: ID!) {
        stock(id: $id) {
          id
          ...Company
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
