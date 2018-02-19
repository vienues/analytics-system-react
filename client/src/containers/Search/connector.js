import { compose } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export default compose(
  graphql(
    gql`
      query searchQuery($id: ID!) {
        stock(id: $id) {
          id
          company {
            id
            name
            exchange
          }
        }
      }
    `,
    {
      skip: ownProps => !ownProps.id,
    },
  ),
  graphql(
    gql`
      query storeQuery {
        currentSymbol @client {
          id
          name
        }
      }
    `,
    { name: 'store' },
  ),
  graphql(
    gql`
      mutation search($text: String!) {
        updateSearch(text: $text) @client {
          id
          name
        }
      }
    `,
    { name: 'updateSearch' },
  ),
  graphql(
    gql`
      mutation setSymbol($symbol: ReferenceSymbol!) {
        updateCurrentSymbol(symbol: $symbol) @client {
          id
          name
        }
      }
    `,
    { name: 'updateCurrentSymbol' },
  ),
);
