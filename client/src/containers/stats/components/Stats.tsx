import numeral from 'numeral'
import * as React from 'react'
import { DataCard, BoldText, LightText } from '../../../common/StyledComponents'
import { StatsQuery_stock as StatsQueryStock } from '../../../__generated__/types'
import { FieldsWrapper, LabeledData } from './Stats.styled'

const formats = {
  approximate: '(0.00 a)',
  dollars: '$ 0,0[.]00',
  integer: '0,0',
  number: '0,0.00',
}

const format = (toFormat: string) => (val?: any) => {
  if (val) {
    return numeral(val).format(formats[toFormat] || toFormat)
  } else {
    return 'N/A'
  }
}

const Fields: Array<{ key: number; label: string; format: string; field: string | string[] }> = [
  { key: 1, label: 'Previous Close', format: 'dollars', field: 'previousClose' },
  { key: 2, label: 'Day Range', format: 'dollars', field: ['low', 'high'] },
  { key: 3, label: 'Volume', format: 'approximate', field: 'latestVolume' },
  { key: 4, label: 'Market Cap', format: 'approximate', field: 'marketcap' },
  { key: 5, label: 'P/E Ratio', format: 'number', field: 'peRatio' },
  { key: 6, label: 'Open', format: 'dollars', field: 'open' },
  { key: 7, label: '52 Week Range', format: 'number', field: ['week52low', 'week52high'] },
  { key: 8, label: 'Total Avg. Volume', format: 'approximate', field: 'avgTotalVolume' },
  { key: 9, label: 'Earnings Per Share', format: 'number', field: 'ttmEPS' },
  { key: 10, label: 'Dividend Yield', format: 'number', field: 'dividendYield' },
]

const Stats: React.FunctionComponent<{ stock: StatsQueryStock; id: string }> = ({ stock: { quote, stats }, id }) => {
  const data = { ...quote, ...stats }

  return (
    <DataCard cardType="stats" title="Key Statistics" instrument={id} headingStyle={{ marginLeft: '7px' }}>
      <FieldsWrapper>
        {Fields.map(Field => {
          return (
            <LabeledData key={Field.key}>
              <BoldText>{Field.label}</BoldText>
              {Array.isArray(Field.field) ? (
                <LightText>{Field.field.map(field => format(Field.format)(data[field])).join(' - ')}</LightText>
              ) : (
                <LightText>{format(Field.format)(data[Field.field])}</LightText>
              )}
            </LabeledData>
          )
        })}
      </FieldsWrapper>
    </DataCard>
  )
}

export default Stats
