import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const StockCompanyConnector = graphql(gql`
  query StockCompanyConnectorQuery($id: ID!){
    stock(id: $id) {
      id
      company {
        id
        symbol
        name
        exchange
        industry
        website
        description
        CEO
        issueType
        sector
      }
      peers
    }

  }
`, {
  options: ({ id }) => ({
    variables: { id }
  })
})(({ is: Component, ...props }) => <Component {...props} {...props.data}/>)

StockCompanyConnector.defaultProps = {
  is: 'div',
  children: "This connector requires a custom rendering component"
}

export default StockCompanyConnector
