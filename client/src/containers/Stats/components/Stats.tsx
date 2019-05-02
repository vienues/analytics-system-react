import numeral from 'numeral'
import * as React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { StatsQuery_stock } from '../../../__generated__/types'
import { AnalyticsStyle, Header, Title } from '../../../rt-theme/analyticsStyle'
import { Label } from '../../../styleguide'

export interface IProps {
  stock: StatsQuery_stock
}

const formats = {
  approximate: '(0.00 a)',
  dollars: '$ 0,0[.]00',
  integer: '0,0',
  number: '0,0[.]00',
}

const NewFieldRow = styled.div`
  min-height: 2rem
  border-bottom: 1px ${({ theme }) => theme.core.textColor} solid
  display: grid
  grid-template-columns: 
`

const format = (toFormat: string) => (val: any) => numeral(val).format(formats[toFormat] || toFormat)

const FieldRow = ({ label, children, dataFormat }: any) => {
  return (
    <NewFieldRow>
      <Flex flex={1} pt={1}>
        <Flex flex={['auto']}>
          <Label>{label}</Label>
        </Flex>
        <Box color="offwhite">{dataFormat ? format(dataFormat)(children) : children}</Box>
      </Flex>
    </NewFieldRow>
  )
}

const Stats: React.FunctionComponent<IProps> = ({ stock: { quote, stats } }) => (
  <AnalyticsStyle>
    <Header>
      <Title>Key Stats</Title>
    </Header>
    <div style={{ display: 'grid', gridGap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))' }}>
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
    </div>
  </AnalyticsStyle>
)

export default Stats
