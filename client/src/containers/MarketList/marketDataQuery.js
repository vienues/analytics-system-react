import gql from 'graphql-tag';
import { lifecycle, compose } from 'recompose';
import { graphql } from 'react-apollo';

const getMarkets = gql`
  query getMarketData {
    markets {
      id
      name
      lastUpdate {
        change
        id
        volume
      }
    }
  }
`;

const subscribeMarket = gql`
  subscription onMarketUpdate($markets: [String!]!) {
    marketUpdates(symbols: $markets) {
      id
      change
      volume
    }
  }
`;

const connectSubscription = lifecycle({
  componentWillReceiveProps(nextProps) {
    this.unsubscribe = nextProps.data.subscribeToMore({
      document: subscribeMarket,
      variables: {
        markets: nextProps.data.markets.map(x => x.id),
      },
      updateQuery: ({ markets }, { subscriptionData, variables }) => {
        const copy = [...markets];
        const index = copy.findIndex(({ id }) => id === subscriptionData.data.marketUpdates.id);
        const x = { ...copy[index], lastUpdate: subscriptionData.data.marketUpdates };
        copy.splice(index, 1, x);
        return { markets: copy };
      },
    });
  },
});

export default compose(graphql(getMarkets), connectSubscription);
