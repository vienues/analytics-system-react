import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const CompanyConnector = graphql(
  gql`
    query StockCompanyConnectorQuery($id: ID!) {
      stock(id: $id) {
        id
        company {
          id
          symbol
          name
          exchange
          industry
          website
          description
          CEO
          issueType
          sector
        }
        peers
      }
    }
  `,
  {
    options: ({ id }) => ({
      variables: { id },
    }),
  },
);

export default CompanyConnector;
