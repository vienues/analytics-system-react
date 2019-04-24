import numeral from 'numeral'
import React from 'react'
import { ChildProps } from 'react-apollo'
import { Box, Flex } from 'rebass'
import { StatsQuery, StatsQueryVariables } from '../__generated__/types'
import { AppQuery } from '../common/AppQuery'
import StatsConnection from '../graphql/StatsConnection.graphql'
import { Divider, Label } from '../styleguide'

export interface IProps {
  id: string
}

const formats = {
  approximate: '(0.00 a)',
  dollars: '$ 0,0[.]00',
  integer: '0,0',
  number: '0,0[.]00',
}

const format = (toFormat: string) => (val: any) => numeral(val).format(formats[toFormat] || toFormat)

const FieldRow = ({ label, children, dataFormat }: any) => {
  return (
    <>
      <Flex flex={1} pt={1}>
        <Flex flex={['auto']}>
          <Label>{label}</Label>
        </Flex>
        <Box color="offwhite">{dataFormat ? format(dataFormat)(children) : children}</Box>
      </Flex>
      <Divider color="primary50a" borderWidth={1} my={1} mb={1} />
    </>
  )
}

const Stats: React.FunctionComponent<ChildProps<IProps, Response>> = (props: ChildProps<IProps, Response>) => {
  return (
    <AppQuery<StatsQuery, StatsQueryVariables> query={StatsConnection} variables={{ id: props.id }}>
      {(data, _) => {
        if (data.stock && data.stock.stats && data.stock.quote) {
          const { stats, quote } = data.stock
          return (
            <Flex flex={1}>
              <Box width={1 / 2}>
                <FieldRow label="Previous Close" dataFormat="dollars">
                  {quote.previousClose}
                </FieldRow>
                <FieldRow label="Day Range">
                  $ {format('number')(quote.low)} - {format('number')(quote.high)}
                </FieldRow>
                <FieldRow label="Volume" dataFormat="approximate">
                  {quote.latestVolume}
                </FieldRow>
                <FieldRow label="Market Cap" dataFormat="approximate">
                  {stats.marketcap}
                </FieldRow>
                <FieldRow label="P/E Ratio" dataFormat="number">
                  {stats.peRatioHigh}
                </FieldRow>
              </Box>
              <Box width={1 / 2} px={[0, 2]}>
                <FieldRow label="Open" dataFormat="dollars">
                  {quote.open}
                </FieldRow>
                <FieldRow label="52 Week Range">
                  $ {format('number')(stats.week52low)} - {format('number')(stats.week52high)}
                </FieldRow>
                <FieldRow label="Total Avg. Volume" dataFormat="approximate">
                  {quote.avgTotalVolume}
                </FieldRow>
                <FieldRow label="Earnings Per Share" dataFormat="number">
                  {stats.latestEPS}
                </FieldRow>
                <FieldRow label="Dividend Yield" dataFormat="number">
                  {stats.dividendYield}
                </FieldRow>
              </Box>
            </Flex>
          )
        } else {
          return <></>
        }
      }}
    </AppQuery>
  )
}

export default Stats
