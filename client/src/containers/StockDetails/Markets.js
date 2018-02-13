import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import { lifecycle, compose } from 'recompose'

const Markets = (props) => {
    console.log(props)
    const {data: {loading, error, stock}} = props;
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Error!</p>;
    } else {
      return (
        <div>

        </div>
      );
    }
  }
;

const getMarkets = gql`
  query {
    stock(symbol:"aapl"){
      relatedMarkets {
        id
        name
      }
    }
  }
`;

const subscribeMarket = gql`
  subscription onMarketUpdate($markets: [String!]!){
    marketUpdates(symbols: $markets){
      id,
      change,
      volume
    }
  }
`;

// const lifecycleHOQ = lifecycle({
//   componentWillReceiveProps(nextProps) {
//     console.log(nextProps)
//     if (!nextProps.data.loading) {
//       // Check for existing subscription
//       if (this.unsubscribe) {
//         // Check if props have changed and, if necessary, stop the subscription
//         if (this.props.subscriptionParam !== nextProps.subscriptionParam) {
//           this.unsubscribe();
//         } else {
//           return;
//         }
//       }
//
//       console.warn(nextProps.data.stock.relatedMarkets);
//       this.unsubscribe = nextProps.data.subscribeToMore({
//         document: subscribeMarket,
//         variables: {
//           markets: nextProps.data.stock.relatedMarkets.map(x => x.id)
//         },
//         updateQuery: (previousResult, {subscriptionData, variables}) => {
//           // Perform updates on previousResult with subscriptionData
//           console.log(subscriptionData)
//           return previousResult;
//         }
//       });
//     }
//   }
// })

export default compose(
  graphql(getMarkets),
  graphql(subscribeMarket, {
    name: 'sub1',
    options: () => ({variables: {markets: ['NASDAQ']}}),
  }))(Markets)
