import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { loadable } from '../../common';

export const CompanyConnector = fragment =>
  compose(
    graphql(
      gql`
        subscription SelectionChange {
          selection @openfin {
            id
            symbol
          }
        }
      `,
    ),
    loadable,
    graphql(
      gql`
        query StockCompanyConnectorQuery($id: ID!) {
          stock(id: $id) {
            id
            ...Company
          }
        }
        ${fragment}
      `,
      {
        options: props => ({ variables: { id: props.data.selection.id } }),
      },
    ),
  );

export default CompanyConnector;
