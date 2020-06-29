import { maxBy, minBy, round } from 'lodash'
import React from 'react'
import {
  ReferenceLine,
  ResponsiveContainer,
  TickFormatterFunction,
  XAxis,
  YAxis,
  Line,
  LineChart,
  CartesianGrid,
} from 'recharts'
import { StockHistoryQuery } from '../../../__generated__/types'
import { ThemeConsumer, themes, getThemeColor } from '../../../rt-theme'
import { DataCard } from 'common/StyledComponents'

export const StockHistoryChart = (props: StockHistoryQuery) => {
  const {
    stock: { id, quote },
  } = props
  const previousClose = quote.previousClose
  const chartData = props.stock.chart.filter(
    ({ low, average, high }) => (low && low > 0) || (average && average > 0) || (high && high > 0),
  )

  const { low: lowestPrice } = minBy(chartData, 'low') || { low: undefined }
  const { high: highestPrice } = maxBy(chartData, 'high') || { high: undefined }
  const tickFormatter: TickFormatterFunction = (tick: number) => (tick < 100 ? tick.toFixed(2) : tick.toFixed(0))

  return (
    <ThemeConsumer>
      {({ themeName }) => (
        <DataCard cardType="history" title={id} instrument={id}>
          <ResponsiveContainer width="99%" height="99%" minHeight={300}>
            <LineChart data={chartData} margin={{ left: 0, top: 0, right: -32, bottom: 0 }}>
              <ReferenceLine y={previousClose!} strokeDasharray="4 3" strokeWidth={2} />

              <CartesianGrid vertical={true} verticalFill={['#F2F2F2', '#FFFFFF']} />

              <Line
                type="linear"
                dot={false}
                strokeWidth={2}
                dataKey="average"
                stroke={getThemeColor(themes[themeName || 'light'], (a_theme) => a_theme.accents.accentPrimary)}
              />
              <XAxis
                tickLine={{ stroke: '#DFDFDF' }}
                axisLine={{ stroke: '#DFDFDF' }}
                dataKey="label"
                interval={round(chartData.length / 12)}
                tick={{ fontSize: 10 }}
                tickSize={12}
              />
              <YAxis
                type="number"
                axisLine={{ stroke: '#DFDFDF' }}
                tickLine={{ stroke: '#DFDFDF' }}
                allowDecimals={true}
                domain={[lowestPrice!, highestPrice!]}
                tick={{ fontSize: 10 }}
                tickFormatter={tickFormatter}
                orientation="left"
              />
            </LineChart>
          </ResponsiveContainer>
        </DataCard>
      )}
    </ThemeConsumer>
  )
}
