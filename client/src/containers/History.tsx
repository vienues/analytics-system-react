import _ from 'lodash'
import React from 'react'
import { ChildProps } from 'react-apollo'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { withTheme } from 'styled-components'
import { HistoryQuery, HistoryQueryVariables } from '../__generated__/types'
import { AppQuery } from '../common/AppQuery'
import HistoryConnection from '../graphql/HistoryConnection.graphql'

export interface IProps {
  theme: any
  previousClose?: any
  id: string
}

export const History: React.FunctionComponent<ChildProps<IProps, Response>> = (props: ChildProps<IProps, Response>) => {
  const fixedFormat = (e: number) => {
    return e < 100 ? e.toFixed(2) : e.toFixed(0)
  }

  return (
    <AppQuery<HistoryQuery, HistoryQueryVariables> query={HistoryConnection} variables={{ id: props.id }}>
      {(data, __) => {
        if (data.stock && data.stock.chart) {
          const chart = data.stock.chart
          const filtertChart = chart.filter(
            ({ low: aLow, average: aAverage, high: aHigh }: any) => aLow > 0 || aAverage > 0 || aHigh > 0,
          )

          const { low } = (_.minBy(filtertChart, 'low') || {}) as any
          const { high } = (_.maxBy(filtertChart, 'high') || {}) as any
          const theme = props.theme
          return (
            <ResponsiveContainer width="99%" maxHeight={300} minHeight={200}>
              <AreaChart data={chart as object[]} margin={{ left: 0, top: 0, right: -32, bottom: 0 }}>
                <CartesianGrid stroke={theme.colors.primary50a} />
                {/* <ReferenceLine y={previousClose} stroke={theme.colors.accent} strokeDasharray="3 3" /> */}
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
                  stroke={theme.colors.accent}
                  fill="url(#colorUv)"
                  dot={false}
                  isAnimationActive={false}
                />
                <XAxis
                  dataKey="label"
                  interval={_.round(chart.length / 12)}
                  tick={{ fontSize: 10 }}
                  tickSize={12}
                  stroke={theme.colors.primary50a}
                />
                <YAxis
                  type="number"
                  allowDecimals={true}
                  domain={[low, high]}
                  tick={{ fontSize: 10 }}
                  tickFormatter={fixedFormat}
                  orientation="right"
                  stroke={theme.colors.primary50a}
                />
              </AreaChart>
            </ResponsiveContainer>
          )
        } else {
          return <></>
        }
      }}
    </AppQuery>
  )
}

export default withTheme(History)
