import React from 'react'
import { Line, LineChart, XAxis } from 'recharts'

const StockHistory = ({prices}) => {
  return (
      <div><LineChart
        width={400}
        height={400}
        data={prices}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <Line type="monotone" dataKey="close" stroke="#ff7300" yAxisId={0} />
      </LineChart></div>
  );
};

export default StockHistory;