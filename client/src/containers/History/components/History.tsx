import numeral from 'numeral'
import React, { useEffect, useState } from 'react'
import { Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from 'recharts'
import {
  AnalyticsLineChartStyle,
  DataCard,
  Heading,
  Text,
  ToolTipChildLeft,
  ToolTipChildRight,
  ToolTipStyle,
} from '../../../common/StyledComponents'

interface IHistoryData {
  previousClose: number
  dataPoints: IDataPoint[]
}

interface IDataPoint {
  x: string
  y: string
}

const CustomTooltip: React.FC<TooltipProps> = ({ payload, label }) => (
  <ToolTipStyle>
    <ToolTipChildLeft>{label}</ToolTipChildLeft>
    <ToolTipChildRight>
      {payload ? payload.length > 0 && numeral(payload[0].value).format('$0,0[.]00') : ''}
    </ToolTipChildRight>
  </ToolTipStyle>
)

const History: React.FunctionComponent<{ history: IHistoryData }> = ({ history: { dataPoints, previousClose } }) => {
  const intervalWidth = 30
  const [storedOffset, setStoredOffset] = useState(0)
  const tickFormatYAxis: (x: string) => string = x => numeral(x).format('$0,0[.]00')

  useEffect(() => {
    setStoredOffset(currentStoredOffset => (currentStoredOffset + 1 === intervalWidth ? 0 : currentStoredOffset + 1))
  }, [dataPoints])

  const getDataPoint = (rawDataPoints: IDataPoint[]) =>
    rawDataPoints.filter((_, index) => (index + storedOffset) % intervalWidth === 0)

  const getLinearGradientOffset: (min: number, max: number, previousClose: number) => number = (min, max, pc) => {
    if (max <= pc) {
      return 0
    }
    if (min >= pc) {
      return 1
    }

    return 1 - (pc - min) / (max - min)
  }
  const lineProps = { strokeDasharray: '4 3', stroke: '#444C5F', strokeOpacity: 0.9, strokeWidth: 0.8 }
  const filteredDataPoints = getDataPoint(dataPoints)
  const { trueLow, trueHigh } = dataPoints
    .map(point => parseFloat(point.y))
    .reduce(
      (result, value) => {
        if (value > result.trueHigh) {
          result.trueHigh = value
        }
        if (value < result.trueLow) {
          result.trueLow = value
        }
        return result
      },
      { trueHigh: -Infinity, trueLow: Infinity },
    )
  const offset = getLinearGradientOffset(trueLow, trueHigh, previousClose)
  const low = trueLow < previousClose ? trueLow : previousClose
  const high = trueHigh > previousClose ? trueHigh : previousClose
  return (
    <DataCard>
      <Heading>Market Summary</Heading>
      {dataPoints.length > 0 ? (
        <AnalyticsLineChartStyle>
          <ResponsiveContainer width="99%" maxHeight={300} minHeight={200}>
            <LineChart data={dataPoints} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
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
                domain={[low * 0.999, high * 1.001]}
                tickFormatter={tickFormatYAxis}
              />

              <XAxis
                dataKey="x"
                tickLine={false}
                width={400}
                ticks={[dataPoints[0], ...filteredDataPoints].map(({ x }) => x)}
                interval="preserveStartEnd"
                axisLine={false}
              />
              <ReferenceLine y={previousClose} {...lineProps} />
              {offset < 1 && <ReferenceLine y={0} stroke="white" strokeOpacity={0.3} strokeWidth={1} />}
              {[dataPoints[0], ...filteredDataPoints].map(({ x }, i) => (
                <ReferenceLine key={i} x={x} {...lineProps} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </AnalyticsLineChartStyle>
      ) : (
        <Text>No market data available for today</Text>
      )}
    </DataCard>
  )
}

export default History
