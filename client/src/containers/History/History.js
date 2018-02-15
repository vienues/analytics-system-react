import _ from 'lodash';
import React, { PureComponent } from 'react';

import { colors } from '../../styleguide/colors';

import { Line, LineChart, XAxis, ResponsiveContainer, YAxis, ReferenceLine, CartesianGrid } from 'recharts';

export default class History extends PureComponent {
  static defaultProps = {
    data: [],
  };

  render() {
    let { previousClose } = this.props;

    const data = this.props.data.stock.chart;

    if (typeof previousClose === 'string') {
      previousClose = Number(previousClose);
    }

    let { low } = _.minBy(data, 'low') || {};
    let { high } = _.maxBy(data, 'high') || {};

    if (previousClose) {
      high = _.max([high, previousClose]);
    }

    low -= low * 0.0005;
    high += high * 0.0005;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 0, top: 0, right: -32, bottom: 0 }}>
          <CartesianGrid stroke={colors.primary50a} />
          <ReferenceLine y={previousClose} stroke={colors.accent} strokeDasharray="3 3" />
          <Line
            type="basisOpen"
            dataKey="average"
            strokeWidth={2}
            stroke={colors.good}
            dot={false}
            isAnimationActive={false}
          />
          <XAxis
            dataKey="label"
            interval={_.round(data.length / 4)}
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
        </LineChart>
      </ResponsiveContainer>
    );
  }
}