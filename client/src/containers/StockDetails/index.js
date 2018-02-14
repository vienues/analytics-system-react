import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import StockDetailsLayout from './StockDetailsLayout';

const chartQuery = gql`
  query chartQuery($id: ID!) {
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

export default graphql(chartQuery, {
  options({ id }) {
    return {
      variables: { id },
    };
  },
  // updateQuery: (prev, { subscriptionData }) => {
  //   console.log(prev);
  //   console.log(subscriptionData);
  //   // What to do when a broadcast occurs...
  // }
})(StockDetailsLayout);
