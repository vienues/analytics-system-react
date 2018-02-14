import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const StockTickerConnector = graphql(gql`
  query StockTickerConnectorQuery($id: ID!){
    stock(id: $id) {
      id
      chart {
        label
        datetime
        average
        low
        high
      }
    }
  }
`, {
  options: ({ id }) => ({
    variables: { id }
  })
})(({ is: Component, ...props }) => <Component {...props} {...props.data}/>)

StockTickerConnector.defaultProps = {
  is: 'div',
  children: "This connector requires a custom rendering component"
}

export default StockTickerConnector
