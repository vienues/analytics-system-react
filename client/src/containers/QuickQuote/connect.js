import gql from 'graphql-tag';
import { lifecycle, compose } from 'recompose';
import { graphql } from 'react-apollo';

const getQuickQuote = gql`
  query getQuickQuote($id: ID!) {
    stock(id: $id) {
      id
      quote {
        # TODO: should be the Datetime of the quote
        # id
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

// const priceSubscription = gql`
//   subscription quickQuoteSubscription ($markets: [String!]!) {
//     stock(id: $id) {
//       id
//       quote {
//         change
//         changePercent
//         previousClose
//         latestPrice
//         latestUpdate
//         latestTime
//         latestSource
//         latestVolume
//       }
//     }
//   }
// `;
//
// const priceSubscription = lifecycle({
// return;
//   componentWillReceiveProps(nextProps) {
//     this.unsubscribe = nextProps.data.subscribeToMore({
//       document: priceSubscription,
//       variables: {
//         id: nextProps.id
//       },
//     });
//   },
// });

// export default compose(graphql(getQuickQuote), connectSubscription);
