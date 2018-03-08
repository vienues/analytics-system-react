import gql from 'graphql-tag'
import _ from 'lodash'
import React, { PureComponent } from 'react'
import { AreaChart, Path } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Text } from '../../styleguide/index'
import { ClipPath, Defs, LinearGradient, Rect, Stop } from 'react-native-svg'

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

    if (!this.props.data) {
      return <Text>no data</Text>
    }

    if (this.props.data.loading) {
      return <Text>loading</Text>
    }

    const Line = ({ line }) => (
      <Path key={'line'} d={line} stroke={'rgba(39, 87, 140, 1)'} fill={'none'} clipPath={'url(#clip-path-1)'} />
    )

    const Gradient = () => (
      <Defs key={'defs'}>
        <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
          <Stop offset="1%" stopColor="rgb(127, 179, 255)" stopOpacity={0.8} />
          <Stop offset="95%" stopColor="rgb(127, 179, 255)" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    )

    return (
      <AreaChart
        style={{ height: 200, width: '100%' }}
        data={chart}
        contentInset={{ top: 25, bottom: 25 }}
        curve={shape.curveNatural}
        yAccessor={({ item }) => item.average}
        svg={{ fill: 'url(#gradient)' }}
        extras={[Gradient, Line]}
      />
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

export default History
