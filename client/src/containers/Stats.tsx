import React from 'react'
import { Box, Flex } from 'rebass'
import { Divider } from '../styleguide'

import { ChildProps, graphql } from 'react-apollo'
import { loadable } from '../common'
import { compose } from 'recompose'

const STATS_QUERY = require('../graphql/StatsConnection.graphql')
import * as R from 'ramda'
import numeral from 'numeral'

const formats = {
  number: '0,0[.]00',
  integer: '0,0',
  approximate: '(0.00 a)',
  dollars: '$ 0,0[.]00',
}

const format = (format: any) => (number: any) => numeral(number).format(formats[format] || format)

const formatFields = R.evolve({
  // quote
  previousClose: format('dollars'),
  open: format('dollars'),
  low: format('number'),
  high: format('number'),
  latestVolume: format('approximate'),
  avgTotalVolume: format('approximate'),
  // stats
  marketcap: format('approximate'),
  peRatioHigh: format('number'),
  week52low: format('number'),
  week52high: format('number'),
  latestEPS: format('number'),
  dividendYield: format('number'),
})

export interface IProps {
  data: {
    stock: {
      stats: any
      quote: any
    }
  }
}

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
        <Box width={1 / 2}>
          <FieldRow label="Previous Close">{quote.previousClose}</FieldRow>
          <FieldRow label="Day Range">
            $ {quote.low} - {quote.high}
          </FieldRow>
          <FieldRow label="Volume">{quote.latestVolume}</FieldRow>
          <FieldRow label="Market Cap">{stats.marketcap}</FieldRow>
          <FieldRow label="P/E Ratio">{stats.peRatioHigh}</FieldRow>
        </Box>
        <Box width={1 / 2} px={[0, 2]}>
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
    <>
      <Flex flex={1} pt={1}>
        <Flex flex={['auto']} color="offwhite50">
          {label}
        </Flex>
        <Box color="offwhite">{children}</Box>
      </Flex>
      <Divider color="primary50a" borderWidth={1} my={1} mb={1} />
    </>
  )
}

export default compose(
  graphql(STATS_QUERY, {
    options: ({ id }: any) => ({
      variables: { id },
    }),
    // @ts-ignore
  }),
  loadable,
)(Stats)
