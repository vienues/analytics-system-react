import { gql } from 'apollo-server'

export enum MarketSegments {
  FX = 'fx',
  STOCK = 'stock',
  INDEX = 'index',
  FUTURE = 'future',
  BOND = 'bond',
}

export default gql`
  enum MarketSegment {
    FX
    STOCK
    INDEX
    FUTURE
    BOND
  }
`
