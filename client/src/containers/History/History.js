import gql from 'graphql-tag'
import _ from 'lodash'
import React, { PureComponent } from 'react'
import { colors } from '../../styleguide/colors'
import { withTheme } from 'styled-components'

import { Area, AreaChart, XAxis, ResponsiveContainer, YAxis, ReferenceLine, CartesianGrid } from 'recharts'

class History extends PureComponent {
  static defaultProps = {
    data: [],
  }

  state = {
    chart: [],
  }

  componentDidMount() {
    this.update(this.props.data.stock.chart)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data.stock.chart !== nextProps.data.stock.chart) {
      this.update(nextProps.data.stock.chart)
    }
  }

  update(chart) {
    chart = chart.filter(({ low, average, high }) => low > 0 || average > 0 || high > 0)

    let { low } = _.minBy(chart, 'low') || {}
    let { high } = _.maxBy(chart, 'high') || {}

    this.setState({ chart, low, high })
  }

  render() {
    let { previousClose } = this.props
    if (typeof previousClose === 'string') {
      previousClose = Number(previousClose)
    }

    let { chart, low, high } = this.state

    low -= low * 0.0005
    high += high * 0.0005

    return (
      <ResponsiveContainer width="99%" height="99%" minHeight={200}>
        <AreaChart data={chart} margin={{ left: 0, top: 0, right: -32, bottom: 0 }}>
          <CartesianGrid stroke={colors.primary50a} />
          <ReferenceLine y={previousClose} stroke={colors.accent} strokeDasharray="3 3" />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="basisOpen"
            dataKey="average"
            strokeWidth={2}
            stroke={this.props.theme.accent}
            fill="url(#colorUv)"
            dot={false}
            isAnimationActive={false}
          />
          <XAxis
            dataKey="label"
            interval={_.round(chart.length / 12)}
            tick={{ fontSize: 10 }}
            tickSize={12}
            stroke={colors.primary50a}
          />
          <YAxis
            type="number"
            allowDecimals
            domain={[low, high]}
            tick={{ fontSize: 10 }}
            tickFormatter={x => (x < 100 ? x.toFixed(2) : x.toFixed(0))}
            orientation="right"
            stroke={colors.primary50a}
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}

History.fragment = gql`
  fragment History on Stock {
    chart {
      label
      datetime
      average
      low
      high
    }
  }
`

export default withTheme(History)
