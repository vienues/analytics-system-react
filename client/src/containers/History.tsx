import _ from 'lodash'
import React, { PureComponent } from 'react'
import { withTheme } from 'styled-components'

import { ChildProps, graphql } from 'react-apollo'
import { loadable } from '../common'
import { compose } from 'recompose'

const HISTORY_QUERY = require('../graphql/HistoryConnection.graphql')

import { Area, AreaChart, XAxis, ResponsiveContainer, YAxis, ReferenceLine, CartesianGrid } from 'recharts'

export interface IProps {
  data: {
    stock: {
      chart: any
    }
  }
  theme: any
  previousClose: any
}

export interface IState {
  chart: any
  low: any
  high: any
}

class History extends PureComponent<ChildProps<IProps, Response>, IState> {
  constructor(props: ChildProps<IProps, Response>) {
    super(props)
  }

  public static defaultProps = {
    data: [],
  }

  public state = {
    chart: [],
    low: 0,
    high: 0,
  }

  public componentDidMount() {
    this.update(this.props.data.stock.chart)
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (this.props.data.stock.chart !== nextProps.data.stock.chart) {
      this.update(nextProps.data.stock.chart)
    }
  }

  public update(chart: any) {
    chart = chart.filter(({ low, average, high }: any) => low > 0 || average > 0 || high > 0)

    const { low } = (_.minBy(chart, 'low') || {}) as any
    const { high } = (_.maxBy(chart, 'high') || {}) as any

    this.setState({ chart, low, high })
  }

  public render() {
    let { theme, previousClose } = this.props
    if (typeof previousClose === 'string') {
      previousClose = Number(previousClose)
    }

    let { chart, low, high } = this.state

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
            allowDecimals
            domain={[low, high]}
            tick={{ fontSize: 10 }}
            tickFormatter={x => (x < 100 ? x.toFixed(2) : x.toFixed(0))}
            orientation="right"
            stroke={theme.colors.primary50a}
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}

export default compose(
  graphql(HISTORY_QUERY, {
    options: ({ id }: any) => ({
      variables: { id },
    }),
    // @ts-ignore
  }),
  loadable,
)(withTheme(History))
