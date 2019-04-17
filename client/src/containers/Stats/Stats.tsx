import gql from 'graphql-tag'
import React from 'react'
import { Box, Flex } from 'rebass'
import { Divider } from '../../styleguide'

import formatFields from './formatFields'

import { ChildProps } from 'react-apollo'

export interface IProps {
  data: {
    stock: {
      stats: any
      quote: any
    }
  }
}

export const STOCK_STATS_QUERY = gql`
  fragment Stats on Stock {
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
`

export class Stats extends React.Component<ChildProps<IProps, Response>, {}> {
  constructor(props: ChildProps<IProps, Response>) {
    super(props)
  }

  public render() {
    let { stats, quote } = this.props.data.stock
    quote = formatFields(quote)
    stats = formatFields(stats)
    return (
      <Flex flex={1}>
        <Box>
          <FieldRow label="Previous Close">{quote.previousClose}</FieldRow>
          <FieldRow label="Day Range">
            $ {quote.low} - {quote.high}
          </FieldRow>
          <FieldRow label="Volume">{quote.latestVolume}</FieldRow>
          <FieldRow label="Market Cap">{stats.marketcap}</FieldRow>
          <FieldRow label="P/E Ratio">{stats.peRatioHigh}</FieldRow>
        </Box>
        <Box px={[0, 2]}>
          <FieldRow label="Open">{quote.open}</FieldRow>
          <FieldRow label="52 Week Range">
            $ {stats.week52low} - {stats.week52high}
          </FieldRow>
          <FieldRow label="Total Avg. Volume">{quote.avgTotalVolume}</FieldRow>
          <FieldRow label="Earnings Per Share">{stats.latestEPS}</FieldRow>
          <FieldRow label="Dividend Yield">{stats.dividendYield}</FieldRow>
        </Box>
      </Flex>
    )
  }
}

const FieldRow = ({ label, children }: any) => {
  return (
    <Flex flex={1} pt={1}>
      <Flex flex={['auto']} color="offwhite50">
        {label}
      </Flex>
      <Box color="offwhite">{children}</Box>
      <Divider color="primary50a" borderWidth={1} my={1} />
    </Flex>
  )
}

export default Stats
