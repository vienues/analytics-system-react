import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const getReferenceSymbols = gql`
  query getReferenceSymbols {
    reference {
      symbols {
        id
        symbol
        name
        value: id
        label: name
      }
    }
  }
`;

export default graphql(getReferenceSymbols);
