import React, { PureComponent } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Chart from './Chart'

const chartQuery = gql`
  query chartQuery($id: ID!) {
    stock(id: $id) {
      id
      price
      quote {
        previousClose
        latestPrice
        latestUpdate
        latestTime
        latestSource
        latestVolume
      }
    }
  }
`

const symbolsSubscription = gql`
  subscription symbolsSubscription($ids: [ID!]!) {
    symbols(ids: $ids) {
      id
      price
    }
  }
`

export default graphql(chartQuery, {
  options({ match }) {
    const id = match.params.symbol
    return {
      variables: { id: match.params.symbol },
    }
    return { variables: { ids: match.params.symbol.split(',') } }
  },
  props(props) {
    const id = props.match.params.symbol
    return { ...props, id }
  },
  // updateQuery: (prev, { subscriptionData }) => {
  //   console.log(prev);
  //   console.log(subscriptionData);
  //   // What to do when a broadcast occurs...
  // }
})(Chart)
