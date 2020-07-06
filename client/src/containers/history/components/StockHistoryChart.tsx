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
import { themes, getThemeColor, useTheme } from '../../../rt-theme'
import { DataCard } from 'common/StyledComponents'

export const StockHistoryChart = (props: StockHistoryQuery) => {
  const {
    stock: { id, quote },
  } = props
  const { themeName } = useTheme()

  const previousClose = quote.previousClose
  const chartData = props.stock.chart.filter(
    ({ low, average, high }) => (low && low > 0) || (average && average > 0) || (high && high > 0),
  )

  const { low: lowestPrice } = minBy(chartData, 'low') || { low: undefined }
  const { high: highestPrice } = maxBy(chartData, 'high') || { high: undefined }
  const tickFormatter: TickFormatterFunction = (tick: number) => (tick < 100 ? tick.toFixed(2) : tick.toFixed(0))

  const strokeColor = getThemeColor(themes[themeName || 'light'], a_theme => a_theme.accents.accentPrimary) ?? '#FFFFFF'
  const backgroundPrimary =
    getThemeColor(themes[themeName || 'light'], a_theme => a_theme.secondary.coreSecondary) ?? '#FFFFFF'
  const backgroundSecondary =
    getThemeColor(themes[themeName || 'light'], a_theme => a_theme.secondary.coreSecondary2) ?? '#FFFFFF'

  return (
    <DataCard cardType="history" title={id} instrument={id}>
      <ResponsiveContainer width="99%" height="99%" minHeight={300}>
        <LineChart data={chartData} margin={{ left: -30, top: 0, right: 0, bottom: 0 }}>
          <CartesianGrid verticalFill={[backgroundSecondary, backgroundPrimary]} />
          <ReferenceLine y={previousClose!} strokeDasharray="4 3" stroke={strokeColor} />

          <Line type="linear" dot={false} strokeWidth={2} dataKey="average" stroke={strokeColor} />
          <XAxis
            tickLine={{ stroke: '#DFDFDF' }}
            axisLine={{ stroke: '#DFDFDF' }}
            dataKey="label"
            interval={round(chartData.length / 12)}
            tick={{ fontSize: 12 }}
            tickSize={12}
          />
          <YAxis
            type="number"
            axisLine={{ stroke: '#DFDFDF' }}
            tickLine={{ stroke: '#DFDFDF' }}
            allowDecimals={true}
            domain={[lowestPrice!, highestPrice!]}
            tick={{ fontSize: 12 }}
            tickFormatter={tickFormatter}
            orientation="left"
          />
        </LineChart>
      </ResponsiveContainer>
    </DataCard>
  )
}
