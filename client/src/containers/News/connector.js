import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const StockNewsConnector = fragment =>
  graphql(
    gql`
      query StockNewsConnectorQuery($id: ID!) {
        stock(id: $id) {
          id
          ...News
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

export default StockNewsConnector;
