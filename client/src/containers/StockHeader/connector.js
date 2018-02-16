import gql from 'graphql-tag';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

const query = gql`
  query mainStockData($id: ID!) {
    stock(id: $id) {
      id
      price
      company {
        id
        name
      }
      quote {
        change
        changePercent
        previousClose
        latestPrice
        latestUpdate
        latestTime
        latestSource
        latestVolume
      }
    }
  }
`;

export default compose(graphql(query));
