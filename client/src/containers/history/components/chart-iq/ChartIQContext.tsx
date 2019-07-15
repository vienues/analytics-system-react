import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { colors, ThemeConsumer } from '../../../../rt-theme'
import { themes } from '../../../../rt-theme/themes'

import HistoryConnection from '../../graphql/HistoryConnection.graphql'
import IntradayConnection from '../../graphql/IntradayConnection.graphql'
import client from '../../../../apollo/client'
import {
  HistoryQuery,
  IntradayQuery,
  IntradayQueryVariables,
  HistoryQueryVariables,
  onStockPriceSubscription,
  onStockPriceSubscriptionVariables,
} from '../../../../__generated__/types'
import StockPriceSubscription from '../../../stock-price/graphql/StockPriceSubscription.graphql'

const CIQ = (window as any).CIQ

const convertDataToChartIQ = (raw: any) => {
  return raw
    .filter(
      (history: any) =>
        !!history && ((history.average || -1) > 0 || (history.low || -1) > 0 || (history.high || -1) > 0),
    )
    .map((history: any) => ({
      Close: history.close,
      Date: history.datetime,
      High: history.high,
      Low: history.low,
      Open: history.open,
      Volume: history.volume,
      x: moment(history.datetime).format('hh:mm:ss A'),
      y: `${history.average}`,
    }))
}

const quoteFeed = {
  fetchInitialData: async (
    symbol: string,
    startDate: Date,
    endDate: Date,
    params: { interval: string; period: string },
    cb: (params: { error?: string; quotes?: any[]; moreAvailable?: boolean }) => void,
  ) => {
    const { data } = await client.query<HistoryQuery, HistoryQueryVariables>({
      query: HistoryConnection,
      variables: { id: symbol },
    })
    if (data && data.stock && data.stock.chart && data.stock.chart.length > 0) {
      cb({ quotes: convertDataToChartIQ(data.stock.chart) })
    } else {
      cb({ error: 'No data' })
    }
  },
  fetchUpdateData: async (
    symbol: string,
    startDate: Date,
    params: { interval: string; period: string },
    cb: (params: { error?: string; quotes?: any[]; moreAvailable?: boolean }) => void,
  ) => {
    const { data } = await client.query<IntradayQuery, IntradayQueryVariables>({
      query: IntradayConnection,
      variables: { symbol: symbol },
    })
    cb({ quotes: convertDataToChartIQ(data.intradayPrices) })
  },
  fetchPaginationData: async (
    symbol: string,
    suggestedStartDate: Date,
    endDate: Date,
    params: { interval: string; period: string },
    cb: (params: { error?: string; quotes?: any[]; moreAvailable?: boolean }) => void,
  ) => {
    // Intraday only, let ChartIQ not to ask for any more data than what the initial fetch provided
    cb({ quotes: [], moreAvailable: false })
  },
}

const ChartIQContext: React.FunctionComponent<{ symbol: string }> = ({ symbol }) => {
  const [currentTheme, setCurrentTheme] = useState('')
  const [stxx, setStxx] = useState<any>(null)

  useEffect(() => {
    CIQ.Studies.studyLibrary['vol undr'] = {
      name: 'Volume Underlay',
      underlay: true,
      seriesFN: CIQ.Studies.volUnderlay,
      calculateFN: CIQ.Studies.calculateVolume,
      inputs: {},
      outputs: {},
      customRemoval: true,
      removeFN: function(stx: any, sd: any) {
        stx.layout.volumeUnderlay = false
        stx.changeOccurred('layout')
      },
      parameters: {
        init: { heightPercentage: 0.5 },
      },
    }
    const chartEngine = new CIQ.ChartEngine({ container: document.querySelector('#chartContainer') })

    // connect chart to data
    chartEngine.attachQuoteFeed(quoteFeed, { refreshInterval: 60 })
    setStxx(chartEngine)
  }, [])

  useEffect(() => {
    if (stxx) {
      // optionally configure the chart
      stxx.chart.xAxis.axisType = 'ntb'
      stxx.chart.yAxis.goldenRatioYAxis = true
      stxx.chart.yAxis.drawCurrentPriceLabel = true
      stxx.preferences.currentPriceLine = true
      stxx.xaxisHeight = 30
      stxx.chart.xAxis.displayGridLines = false

      const UIContext = new CIQ.UI.Context(stxx, document.querySelector('*[cq-context]'))

      UIContext.lookupDriver = new CIQ.UI.Lookup.Driver.ChartIQ()

      stxx.controls.chartControls = null
      stxx.newChart(
        symbol,
        null,
        null,
        () => {
          CIQ.Studies.addStudy(stxx, 'vol undr')
        },
        { span: { base: 'today' } },
      )

      const stockSubscription = client.subscribe<onStockPriceSubscription, onStockPriceSubscriptionVariables>({
        query: StockPriceSubscription,
        variables: { markets: [symbol] },
      })
      const stockSubscriptionSubscribe = stockSubscription.subscribe({
        next(data: any) {
          try {
            stxx.appendMasterData({
              ...stxx.masterData[stxx.masterData.length - 1],
              Close: data.data.getQuotes.latestPrice,
              Low:
                stxx.masterData[stxx.masterData.length - 1].Low > data.data.getQuotes.latestPrice
                  ? data.data.getQuotes.latestPrice
                  : stxx.masterData[stxx.masterData.length - 1].Low,
              High:
                stxx.masterData[stxx.masterData.length - 1].High < data.data.getQuotes.latestPrice
                  ? data.data.getQuotes.latestPrice
                  : stxx.masterData[stxx.masterData.length - 1].High,
            })
            stxx.draw()
          } catch (e) {
            // probably due to no master data existing so it cannot be appended.
            // just leave silence
          }
        },
        error(err: any) {},
      })
      return () => {
        if (stockSubscriptionSubscribe) {
          stockSubscriptionSubscribe.unsubscribe()
        }
      }
    } else {
      return () => {}
    }
  }, [symbol, stxx])

  useEffect(() => {
    if (stxx) {
      stxx.setStyle('cq-attrib-container', 'color', themes[currentTheme].core.textColor)
      stxx.setStyle('stx_xaxis', 'color', themes[currentTheme].core.textColor)
      stxx.setStyle('stx_xaxis', 'borderRightColor', 'red')
      stxx.setStyle('stx_grid_border', 'color', '#54606D')
      stxx.setStyle('stx_panel_border', 'color', '#54606D')

      stxx.setStyle('stx_xaxis_dark', 'color', themes[currentTheme].core.textColor)
      stxx.setStyle('stx_yaxis', 'color', themes[currentTheme].core.textColor)
      stxx.setStyle('stx_yaxis_dark', 'color', themes[currentTheme].core.textColor)
      stxx.setStyle('stx_candle_shadow_up', 'color', colors.accents.good.base)
      stxx.setStyle('stx_candle_shadow_down', 'color', colors.accents.bad.base)
      stxx.setStyle('stx_candle_up', 'borderLeftColor', colors.accents.good.base)
      stxx.setStyle('stx_candle_down', 'borderLeftColor', colors.accents.bad.base)
      stxx.setStyle('stx_grid', 'color', '#54606D')
      stxx.setStyle('stx_grid_dark', 'color', '#54606D')
      stxx.setStyle('ciq-chart', 'color', 'red')

      // Volume study
      stxx.setStyle('stx_volume_underlay_up', 'color', '#54606D')
      stxx.setStyle('stx_volume_underlay_up', 'borderLeftColor', themes[currentTheme].primary[4])
      stxx.setStyle('stx_volume_underlay_down', 'color', '#54606D')
      stxx.setStyle('stx_volume_underlay_down', 'borderLeftColor', themes[currentTheme].primary[4])

      stxx.draw()
    }
  }, [currentTheme, stxx])

  const html = `
  <div cq-context>
    <cq-ui-manager></cq-ui-manager>
    <div style="position: relative; height:400px" id="chartContainer">
      <cq-attribution>
        <template>
          <cq-attrib-container>
            <cq-attrib-source>IEXCloud</cq-attrib-source>
          </cq-attrib-container>
        </template>
      </cq-attribution>
    </div>
    <cq-show-range>
  </div>
`

  return (
    <ThemeConsumer>
      {({ themeName }) => {
        if (!themeName) {
          return
        }
        setCurrentTheme(themeName)
        return <span dangerouslySetInnerHTML={{ __html: html }} />
      }}
    </ThemeConsumer>
  )
}

export default ChartIQContext
