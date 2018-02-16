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

const connectQuery = graphql(query, {
  // TODO remove this comment 👇
  // IDEA whenever we can mimic documentation, lets do that
  // while we could destructure
  // skip: ({ id }) => !id,
  // it occludes what and where the value comes from
  // and for sake of familiarity it will play better to
  // duplicate the docs ………… 🔥 after 📖
  skip: ownProps => !ownProps.id,
});

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
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
});

export default compose(connectQuery, connectSubscription);
