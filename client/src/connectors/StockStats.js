import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const StockStatsConnector = graphql(gql`
  query StockStatsConnectorQuery($id: ID!){
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
        low
        high
        open
        previousClose
        latestVolume
        avgTotalVolume
      }
    }

  }
`, {
  options: ({ id }) => ({
    variables: { id }
  })
})(({ is: Component, ...props }) => <Component {...props} {...props.data}/>)

StockStatsConnector.defaultProps = {
  is: 'div',
  children: "This connector requires a custom rendering component"
}

export default StockStatsConnector
