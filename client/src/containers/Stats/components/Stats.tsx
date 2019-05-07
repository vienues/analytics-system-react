import numeral from 'numeral'
import * as React from 'react'
import { StatsQuery_stock } from '../../../__generated__/types'
import { DataContents, FieldLabel, LabeledData, Text } from '../../../common/StyledComponents'
import { DataCard, Heading } from '../../../common/StyledComponents'

export interface IProps {
  stock: StatsQuery_stock
}

const formats = {
  approximate: '(0.00 a)',
  dollars: '$ 0,0[.]00',
  integer: '0,0',
  number: '0,0.00',
}

const format = (toFormat: string) => (val: any) => numeral(val).format(formats[toFormat] || toFormat)

const Fields: Array<{ label: string; format: string; field: string | string[] }> = [
  { label: 'Previous Close', format: 'dollars', field: 'previousClose' },
  { label: 'Day Range', format: 'dollars', field: ['low', 'high'] },
  { label: 'Volume', format: 'approximate', field: 'latestVolume' },
  { label: 'Market Cap', format: 'approximate', field: 'marketcap' },
  { label: 'P/E Ratio', format: 'number', field: 'peRatioHigh' },
  { label: 'Open', format: 'dollars', field: 'open' },
  { label: '52 Week Range', format: 'number', field: ['week52low', 'week52high'] },
  { label: 'Total Avg. Volume', format: 'approximate', field: 'avgTotalVolume' },
  { label: 'Earnings Per Share', format: 'number', field: 'latestEPS' },
  { label: 'Dividend Yield', format: 'number', field: 'dividendYield' },
]

const Stats: React.FunctionComponent<IProps> = ({ stock: { quote, stats } }) => {
  const data = { ...quote, ...stats }
  return (
    <DataCard>
      <Heading>Key Stats</Heading>
      <DataContents style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))' }}>
        {Fields.map(Field => {
          if (Array.isArray(Field.field)) {
            return (
              <LabeledData key={Field.field.join('')}>
                <FieldLabel>{Field.label}</FieldLabel>
                <Text>{Field.field.map(field => format(Field.format)(data[field])).join(' - ')}</Text>
              </LabeledData>
            )
          } else {
            return (
              <LabeledData key={Field.field}>
                <FieldLabel>{Field.label}</FieldLabel>
                <Text>{format(Field.format)(data[Field.field])}</Text>
              </LabeledData>
            )
          }
        })}
      </DataContents>
    </DataCard>
  )
}

export default Stats
