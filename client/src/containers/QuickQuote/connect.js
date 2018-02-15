import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const getQuickQuote = gql`
  query getQuickQuote($id: ID!) {
    stock(id: $id) {
      id
      quote {
        # TODO: should be the Datetime of the quote
        id
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

export default graphql(getQuickQuote);
