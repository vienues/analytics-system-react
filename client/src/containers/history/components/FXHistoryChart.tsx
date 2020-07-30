import { DataCard } from 'common/StyledComponents'
import { round } from 'lodash'
import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { getThemeColor, ThemeConsumer, themes } from 'rt-theme'
import { ABMHistoryQuery } from '../graphql/types/ABMHistoryQuery'

export const FXHistoryChart: React.FC<ABMHistoryQuery> = ({ getPriceHistory }) => {
  const chartData = getPriceHistory.slice(getPriceHistory.length - 100, getPriceHistory.length)

  return (
    <ThemeConsumer>
      {({ themeName }) => (
        <DataCard
          title={''}
          instrument={''}
          style={{ alignContent: 'unset', padding: 0 }}
          headingStyle={{ display: 'none' }}
        >
          <ResponsiveContainer width="99%" height="99%" minHeight={400}>
            <LineChart data={chartData} margin={{ left: 0, top: 0, right: 40, bottom: 0 }}>
              <CartesianGrid
                verticalFill={[
                  getThemeColor(themes[themeName], color => color.secondary.coreSecondary2) ?? '#F1F2F2',
                  getThemeColor(themes[themeName], color => color.secondary.coreSecondary) ?? '#FFFFFF',
                ]}
              />
              <Line
                type="linear"
                dot={false}
                strokeWidth={2}
                dataKey="mid"
                stroke={getThemeColor(themes[themeName], color => color.accents.accentPrimary) ?? '#AAABD1'}
              />
              <XAxis
                tickLine={{ stroke: '#DFDFDF' }}
                axisLine={{ stroke: '#DFDFDF' }}
                dataKey="valueDate"
                interval={round(chartData.length / 24)}
                tick={{ fontSize: 12, fill: getThemeColor(themes[themeName], color => color.primary.corePrimary5) }}
                tickSize={12}
              />
              <YAxis
                type="number"
                axisLine={{ stroke: '#DFDFDF' }}
                tickLine={{ stroke: '#DFDFDF' }}
                allowDecimals={true}
                domain={['dataMin', 'dataMax']}
                tick={{ fontSize: 12, fill: getThemeColor(themes[themeName], color => color.primary.corePrimary5) }}
                orientation="left"
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </DataCard>
      )}
    </ThemeConsumer>
  )
}
