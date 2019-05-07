import numeral from 'numeral'
import React, { useEffect, useState } from 'react'
import { Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import {
  AnalyticsLineChartStyle,
  Text,
  ToolTipChildLeft,
  ToolTipChildRight,
  ToolTipStyle,
} from '../../../common/StyledComponents'

interface IHistoryData {
  previousClose: number
  dataPoints: IDataPoint[]
}

export interface IHistoryProps {
  history: IHistoryData
}

interface IToolTipProps {
  payload: any[]
  label: string
}

interface IDataPoint {
  x: string
  y: string
}

const CustomTooltip: React.FC<IToolTipProps> = ({ payload, label }) => {
  return (
    <ToolTipStyle>
      <ToolTipChildLeft>{label}</ToolTipChildLeft>
      <ToolTipChildRight>{payload.length > 0 && numeral(payload[0].value).format('$0,0[.]00')}</ToolTipChildRight>
    </ToolTipStyle>
  )
}

export const History: React.FunctionComponent<IHistoryProps> = props => {
  const intervalWidth: number = 30
  const [storedOffset, setStoredOffset] = useState(0)
  const tickFormatYAxis: (x: string) => string = x => numeral(x).format('$0,0[.]00')

  useEffect(() => {
    setStoredOffset(storedOffset + 1 === intervalWidth ? 0 : storedOffset + 1)
  }, [props])

  const getDataPoint = (rawDataPoints: IDataPoint[]) =>
    rawDataPoints.filter((value, index) => (index + storedOffset) % intervalWidth === 0)

  const getLinearGradientOffset: (data: IDataPoint[], previousClose: number) => number = (data, previousClose) => {
    const yValues = data.map(i => parseFloat(i.y))
    const dataMax = Math.max(...yValues)
    const dataMin = Math.min(...yValues)

    if (dataMax <= previousClose) {
      return 0
    }
    if (dataMin >= previousClose) {
      return 1
    }

    return 1 - (previousClose - dataMin) / (dataMax - dataMin)
  }
  const offset = getLinearGradientOffset(props.history.dataPoints, props.history.previousClose)
  const lineProps = { strokeDasharray: '4 3', stroke: '#444C5F', strokeOpacity: 0.9, strokeWidth: 0.8 }
  const dataPoints = getDataPoint(props.history.dataPoints)
  const { low, high } = props.history.dataPoints
    .map(point => parseFloat(point.y))
    .reduce(
      (result, value) => {
        if (value > result.high) {
          result.high = value
        }
        if (value < result.low) {
          result.low = value
        }
        return result
      },
      { high: -Infinity, low: +Infinity },
    )
  if (props.history.dataPoints.length > 0) {
    return (
      <AnalyticsLineChartStyle>
        <ResponsiveContainer width="99%" maxHeight={300} minHeight={200}>
          <LineChart data={props.history.dataPoints} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset={offset} stopColor="#28c988" stopOpacity={1} strokeWidth={1.2} />
                <stop offset={offset} stopColor="#f94c4c" stopOpacity={1} strokeWidth={1.2} />
              </linearGradient>
            </defs>
            <Line type="monotone" dataKey="y" stroke="url(#colorValue)" dot={false} strokeWidth={2} />
            <Tooltip offset={10} cursor={{ stroke: '#14161c', strokeWidth: 2 }} content={CustomTooltip} />
            <YAxis
              width={60}
              tickLine={false}
              padding={{ top: 0, bottom: 0 }}
              axisLine={false}
              domain={[low, high]}
              tickFormatter={tickFormatYAxis}
            />

            <XAxis
              dataKey="x"
              tickLine={false}
              width={400}
              ticks={[props.history.dataPoints[0], ...dataPoints].map(({ x }) => x)}
              interval="preserveStartEnd"
              axisLine={false}
            />
            <ReferenceLine y={props.history.previousClose} {...lineProps} stroke="#444C5F" />
            {offset < 1 && <ReferenceLine y={0} stroke="white" strokeOpacity={0.3} strokeWidth={1} />}
            {[props.history.dataPoints[0], ...dataPoints].map(({ x }, i) => (
              <ReferenceLine key={i} x={x} {...lineProps} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </AnalyticsLineChartStyle>
    )
  } else {
    return <Text>no data</Text>
  }
}

export default History
