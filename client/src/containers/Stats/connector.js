import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const CompanyConnector = graphql(
  gql`
    query StockStatsConnectorQuery($id: ID!) {
      stock(id: $id) {
        id
        stats {
          marketcap
          peRatioLow
          peRatioHigh
          week52low
          week52high
          latestEPS
          dividendRate
          dividendYield
        }
        quote {
          id
          low
          high
          open
          previousClose
          latestVolume
          avgTotalVolume
        }
      }
    }
  `,
  {
    options: ({ id }) => ({
      variables: { id },
    }),
  },
);

export default CompanyConnector;
