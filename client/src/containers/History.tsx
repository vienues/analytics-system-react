import _ from 'lodash'
import React, { PureComponent } from 'react'
import { ChildProps, graphql } from 'react-apollo'
import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { compose } from 'recompose'
import { withTheme } from 'styled-components'
import { HistoryQuery, HistoryQueryVariables } from '../__generated__/types'
import { loadable } from '../common'
import HistoryConnection from '../graphql/HistoryConnection.graphql'

export interface IProps {
  theme: any
  previousClose: any
}

export interface IDataProps {
  data: HistoryQuery
}

export interface IState {
  chart: any
  low: any
  high: any
}

type Props = IProps & IDataProps

class History extends PureComponent<ChildProps<Props, Response>, IState> {
  constructor(props: ChildProps<Props, Response>) {
    super(props)
    this.fixedFormat = this.fixedFormat.bind(this)
    this.state = {
      chart: [],
      high: 0,
      low: 0,
    }
  }

  public componentDidMount() {
    if (this.props.data.stock) {
      this.update(this.props.data.stock.chart)
    }
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (this.props.data.stock && nextProps.data.stock && this.props.data.stock.chart !== nextProps.data.stock.chart) {
      this.update(nextProps.data.stock.chart)
    }
  }

  public update(chart: any) {
    chart = chart.filter(({ low: aLow, average: aAverage, high: aHigh }: any) => aLow > 0 || aAverage > 0 || aHigh > 0)

    const { low } = (_.minBy(chart, 'low') || {}) as any
    const { high } = (_.maxBy(chart, 'high') || {}) as any

    this.setState({ chart, low, high })
  }

  public render() {
    const theme = this.props.theme
    const previousClose = +this.props.previousClose
    const chart = this.state.chart
    let { low, high } = this.state

    low -= low * 0.0005
    high += high * 0.0005

    return (
      <ResponsiveContainer width="99%" maxHeight={300} minHeight={200}>
        <AreaChart data={chart} margin={{ left: 0, top: 0, right: -32, bottom: 0 }}>
          <CartesianGrid stroke={theme.colors.primary50a} />
          <ReferenceLine y={previousClose} stroke={theme.colors.accent} strokeDasharray="3 3" />
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
            tickFormatter={this.fixedFormat}
            orientation="right"
            stroke={theme.colors.primary50a}
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }

  private fixedFormat = (e: number) => {
    return e < 100 ? e.toFixed(2) : e.toFixed(0)
  }
}

const withHistoryData = graphql<Response, HistoryQueryVariables>(HistoryConnection, {
  options: ({ id }: any) => ({
    variables: { id },
  }),
})

export default compose(
  withTheme,
  withHistoryData,
  loadable,
  // @ts-ignore
)(History)
