import React from 'react'
import { minBy, maxBy, round } from 'lodash'
import { AppQuery } from 'common/AppQuery'
import { StockHistoryQuery, StockHistoryQueryVariables } from '../../__generated__/types'
import StockHistoryConnection from './graphql/StockHistoryConnection.graphql'
import { IApolloContainerProps } from 'common/IApolloContainerProps'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, ReferenceLine } from 'recharts'

export const StockHistoryChart = (props: StockHistoryQuery) => {
  const {
    stock: { quote },
  } = props
  let previousClose = quote.previousClose
  const chartData = props.stock.chart.filter(
    ({ low, average, high }) => (low && low > 0) || (average && average > 0) || (high && high > 0),
  )

  let { low } = minBy(chartData, 'low') || { low: undefined }
  let { high } = maxBy(chartData, 'high') || { high: undefined }
  if (typeof previousClose === 'string') {
    previousClose = Number(previousClose)
  }

  return (
    <ResponsiveContainer width="99%" height="99%" minHeight={300}>
      <AreaChart data={chartData} margin={{ left: 0, top: 0, right: -32, bottom: 0 }}>
        <ReferenceLine y={previousClose!} strokeDasharray="4 3" />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7fb3ff" stopOpacity={0.9} />
            <stop offset="95%" stopColor="#7fb3ff00" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="basisOpen"
          dataKey="average"
          strokeWidth={2}
          fill="url(#colorUv)"
          dot={false}
          isAnimationActive={false}
        />
        <XAxis dataKey="label" interval={round(chartData.length / 12)} tick={{ fontSize: 10 }} tickSize={12} />
        <YAxis
          type="number"
          allowDecimals
          domain={[low!, high!]}
          tick={{ fontSize: 10 }}
          tickFormatter={x => (x < 100 ? x.toFixed(2) : x.toFixed(0))}
          orientation="right"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export const StockHistoryContainer: React.FC<IApolloContainerProps> = ({ id }) => {
  return (
    <>
      <AppQuery<StockHistoryQuery, StockHistoryQueryVariables> query={StockHistoryConnection} variables={{ id }}>
        {StockHistoryChart}
      </AppQuery>
    </>
  )
}
