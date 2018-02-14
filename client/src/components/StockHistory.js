import _ from 'lodash';
import React, { PureComponent } from 'react';

import { Line, LineChart, XAxis, ResponsiveContainer, YAxis, ReferenceLine, CartesianGrid } from 'recharts';

const COLORS = {
  grid: '#cfd3d6',
  previousClose: '#4a9eda',
  high: '#79e4a6',
  average: 'rgba(200,200,220,0.85)',
  low: '#e16973',
};

export default class StockHistory extends PureComponent {
  static defaultProps = {
    data: [],
  };

  render() {
    const previousClose = this.props.previousClose == null ? null : Number(this.props.previousClose);
    const sample = (this.props.data || [])[0] || {};

    const low = _.min([previousClose, _.round(sample.low - sample.low * 0.02, 1)]);

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={this.props.data} margin={{ left: -16, top: 0, right: 0, bottom: 0 }}>
          <CartesianGrid stroke={COLORS.grid} strokeDasharray="3 3" vertical={false} />
          <ReferenceLine y={previousClose} stroke={COLORS.previousClose} strokeDasharray="3 3" />
          {/* <Line
            type="basisOpen"
            dataKey="low"
            strokeWidth={3}
            stroke={COLORS.low}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="basisOpen"
            dataKey="high"
            strokeWidth={3}
            stroke={COLORS.high}
            dot={false}
            isAnimationActive={false}
          /> */}
          <Line
            type="basisOpen"
            dataKey="average"
            strokeWidth={5}
            stroke={COLORS.average}
            dot={false}
            isAnimationActive={false}
          />
          <XAxis
            dataKey="label"
            interval={_.round(this.props.data.length / 4)}
            tick={{ fontSize: 12 }}
            tickSize={12}
            // tickFormatter={dt => DateTime.fromISO(dt).toLocaleString(DateTime.TIME_24_SIMPLE)}
          />
          <YAxis
            type="number"
            allowDecimals
            domain={[low, previousClose]}
            tick={{ fontSize: 12 }}
            tickSize={12}
            tickFormatter={x => x.toFixed(2)}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
