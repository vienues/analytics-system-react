import { loadable, maybe } from '../../common'
import { compose } from 'recompose'
import connect from './connector'
import StockPrice from './StockPrice'

// @ts-ignore
export default compose(
  maybe({ cond: ({ id }: any) => id == null }),
  connect,
  loadable,
)(StockPrice)
