const TOPIC = 'chartiq:main:change_symbol'

const isFinsemble = typeof window.FSBL !== 'undefined'
const isOpenFin = typeof fin !== 'undefined'

const addListener = () => {
  if (isFinsemble) {
    return FSBL.Clients.RouterClient.addListener(TOPIC, (err, { data: { symbol, interval } }) =>
      configureChart(interval, symbol),
    )
  }
  if (isOpenFin) {
    return fin.desktop.InterApplicationBus.subscribe('*', TOPIC, ({ symbol, interval }) =>
      configureChart(interval, symbol),
    )
  }
}

const configureChart = (interval, symbol) => {
  stxx.setPeriodicityV2(1, interval)
  UIContext.changeSymbol({ symbol })
}

const hideSearch = () => {
  const search = document.querySelector('.ciq-search')
  search.style['display'] = 'none'
}

const getInitialValues = () => {
  const params = new URL(document.location).searchParams
  const symbol = params.get('symbol')
  const interval = params.get('period')
  configureChart(interval, symbol)
}

document.addEventListener('DOMContentLoaded', () => {
  hideSearch()
  getInitialValues()
  addListener()
})
