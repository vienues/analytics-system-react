import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import News from './News';

export const StockNewsConnector = graphql(
  gql`
    query StockNewsConnectorQuery($id: ID!) {
      stock(id: $id) {
        id
        ...News
      }
    }
    ${News.fragment}
  `,
  {
    options: ({ id }) => ({
      variables: { id },
    }),
  },
);

export default StockNewsConnector;
