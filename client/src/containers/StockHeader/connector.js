import gql from 'graphql-tag';
import { compose, lifecycle } from 'recompose';
import { graphql } from 'react-apollo';

const query = gql`
  query mainStockData($id: ID!) {
    stock(id: $id) {
      id
      company {
        id
        name
      }
      quote {
        id
        change
        changePercent
        latestPrice
      }
    }
  }
`;

const subscribeMarket = gql`
  subscription($markets: [String!]!) {
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
    this.unsubscribe = nextProps.data.subscribeToMore({
      document: subscribeMarket,
      variables: {
        markets: nextProps.data.stock.id,
      },
      updateQuery: (prev, { subscriptionData }) => {
        const stockCpy = { ...prev.stock, quote: subscriptionData.data.getQuotes };
        return { ...prev, stock: stockCpy };
      },
    });
  },
});

export default compose(graphql(query), connectSubscription);
