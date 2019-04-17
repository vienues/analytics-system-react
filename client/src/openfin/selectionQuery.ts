import gql from 'graphql-tag'

export const SUBSCRIBE_TO_SELECTION = gql`
  subscription SelectionChange {
    selection @openfin {
      id
      symbol
    }
  }
`

export const QUERY_SELECTION = gql`
  query GetSelection {
    selection @openfin {
      id
      symbol
    }
  }
`
