import numeral from 'numeral'
import * as React from 'react'
import styled from 'styled-components'
import { StatsQuery_stock } from '../../../__generated__/types'
import { Label } from '../../../common/StyledComponents'
import { DataCard, Header, Title } from '../../../common/StyledComponents'

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
  min-height: 1.5rem
  border-bottom: 1px ${({ theme }) => theme.core.textColor} solid
  display: grid
  grid-template-columns: 1fr auto
`

const format = (toFormat: string) => (val: any) => numeral(val).format(formats[toFormat] || toFormat)

const FieldRow = ({ label, children, dataFormat }: any) => {
  return (
    <NewFieldRow>
      <Label>{label}</Label>
      <span color="offwhite">{dataFormat ? format(dataFormat)(children) : children}</span>
    </NewFieldRow>
  )
}

const Stats: React.FunctionComponent<IProps> = ({ stock: { quote, stats } }) => (
  <DataCard>
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
  </DataCard>
)

export default Stats
