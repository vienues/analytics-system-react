import gql from 'graphql-tag';
import { lifecycle, compose } from 'recompose';
import { graphql } from 'react-apollo';

const getMarkets = gql`
  query getMarketData {
    markets {
      id
      change
      changePercent
      latestPrice
    }
  }
`;

const subscribeMarket = gql`
  subscription onMarketUpdate($markets: [String!]!) {
    getQuotes(symbols: $markets) {
      id
      change
      changePercent
      latestPrice
    }
  }
`;

const connectSubscription = lifecycle({
  componentWillReceiveProps(nextProps) {
    if (!nextProps.data.loading) {
      // Check for existing subscription
      if (this.unsubscribe) {
        // Check if props have changed and, if necessary, stop the subscription
        if (this.props.data.markets.length !== nextProps.data.markets.length) {
          console.log('unsubscribe');
          this.unsubscribe();
        }
        return;
      }
    }

    this.unsubscribe = nextProps.data.subscribeToMore({
      document: subscribeMarket,
      variables: {
        markets: nextProps.data.markets.map(x => x.id),
      },
      updateQuery: ({ markets }, { subscriptionData, variables }) => {
        const copy = [...markets];
        const index = copy.findIndex(({ id }) => id === subscriptionData.data.getQuotes.id);
        const x = { ...copy[index] };
        copy.splice(index, 1, x);
        return { markets: copy };
      },
    });
  },
});

export default compose(graphql(getMarkets), connectSubscription);
