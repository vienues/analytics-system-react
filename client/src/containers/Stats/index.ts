import { loadable } from '../../common'
import { compose } from 'recompose'

import connect from './connector'
import Stats, { STOCK_STATS_QUERY } from './Stats'

// @ts-ignore
export default compose(
  connect(STOCK_STATS_QUERY),
  loadable,
  // @ts-ignore
)(Stats)
