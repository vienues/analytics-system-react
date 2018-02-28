import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const CompanyConnector = fragment =>
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
      options: ({ id }) => ({
        variables: { id },
      }),
    },
  )

export default CompanyConnector
