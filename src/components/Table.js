import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const Row = ({security}) => {
  return (
    <tr>
      <td>{security}</td>
    </tr>
  )
}

const PRICE_DATA_QUERY = gql`
    # 2
    query PriceDataQuery {
        priceData {
            security
            yield
            change
            percentChange
        }
    }
`
export const TableInner = ({priceDataQuery}) => {
  if (priceDataQuery && priceDataQuery.loading) {
    return <div>Loading</div>
  }

  // 2
  if (priceDataQuery && priceDataQuery.error) {
    return <div>Error</div>
  }

  return (
    <table>
      <thead>
      <tr>
        <th>Security</th>
        <th>yield</th>
        <th>change</th>
        <th>percentChange</th>
      </tr>
      </thead>
      <tbody>
      {
        priceDataQuery.priceData.map(
          row => <tr key={row.security}>
            <td>{row.security}</td>
            <td>{row.yield}</td>
            <td>{row.change}</td>
            <td>{row.percentChange}</td>
          </tr>)
      }
      </tbody>
    </table>

  )
}

export const Table = graphql(PRICE_DATA_QUERY, {name: 'priceDataQuery'})(TableInner)
