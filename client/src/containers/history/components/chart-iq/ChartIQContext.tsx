import React, { useEffect, useState } from 'react'
import { colors, ThemeConsumer } from '../../../../rt-theme'
import { themes } from '../../../../rt-theme/themes'

// CHART-IQ TESTING
const CIQ = (window as any).CIQ
// const quotefeedSimulator = (window as any).quotefeedSimulator

const ChartIQContext: React.FunctionComponent<{ symbol: string; dataPoints: any }> = ({ symbol, dataPoints }) => {
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

    setStxx(new CIQ.ChartEngine({ container: document.querySelector('#chartContainer') }))
  }, [])

  useEffect(() => {
    if (stxx) {
      // optionally configure the chart
      stxx.chart.xAxis.axisType = 'ntb'
      stxx.chart.yAxis.goldenRatioYAxis = true
      stxx.chart.yAxis.drawCurrentPriceLabel = true
      stxx.xaxisHeight = 30
      stxx.chart.xAxis.displayGridLines = false
      // connect chart to data
      // stxx.attachQuoteFeed(quotefeedSimulator,{refreshInterval:1});

      const UIContext = new CIQ.UI.Context(stxx, document.querySelector('*[cq-context]'))

      UIContext.lookupDriver = new CIQ.UI.Lookup.Driver.ChartIQ()
      stxx.controls.chartControls.style.display = 'none'
      stxx.controls.chartControls = null
      stxx.newChart(symbol, dataPoints, null, () => {}, { span: { base: 'today' } })

      CIQ.Studies.addStudy(stxx, 'vol undr')
    }
  }, [symbol, stxx])

  useEffect(() => {
    if (stxx) {
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
