import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const CompanyConnector = graphql(
  gql`
    query StockTickerConnectorQuery($id: ID!) {
      stock(id: $id) {
        id
        chart {
          label
          datetime
          average
          low
          high
        }
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
