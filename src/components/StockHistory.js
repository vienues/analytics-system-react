import React from 'react'
import { Line, LineChart, XAxis, ResponsiveContainer, YAxis } from 'recharts'

const StockHistory = ({prices, className}) => {
  return (
    <section className={className}>
      <ResponsiveContainer width='100%'
                           height={400}>
        <LineChart
          data={prices}
          margin={{top: 30}}
        >
          <Line type="monotone" dataKey="close" stroke="#ff7300"/>
          <XAxis dataKey="date"/>
          <YAxis allowDecimals={true} interval={0} tickFormatter={x=>x.toFixed(2)} type="number" domain={['dataMin', 'dataMax']}/>
        </LineChart>
      </ResponsiveContainer></section>
  );
};

export default StockHistory;