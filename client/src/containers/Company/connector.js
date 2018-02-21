import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const CompanyConnector = fragment =>
  graphql(
    gql`
      query StockCompanyConnectorQuery($id: ID!) {
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
  );

export default CompanyConnector;
