import * as R from 'ramda'
import numeral from 'numeral'

const formats = {
  number: '0,0[.]00',
  integer: '0,0',
  approximate: '(0.00 a)',
  dollars: '$ 0,0[.]00',
}

const format = (format: any) => (number: any) => numeral(number).format(formats[format] || format)

const formatFields = R.evolve({
  // quote
  previousClose: format('dollars'),
  open: format('dollars'),
  low: format('number'),
  high: format('number'),
  latestVolume: format('approximate'),
  avgTotalVolume: format('approximate'),
  // stats
  marketcap: format('approximate'),
  peRatioHigh: format('number'),
  week52low: format('number'),
  week52high: format('number'),
  latestEPS: format('number'),
  dividendYield: format('number'),
})

export default formatFields
