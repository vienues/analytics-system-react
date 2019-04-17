import { loadable } from '../../common'
import { compose } from 'recompose'

import connect from './connector'
import History, { HISTORY_QUERY } from './History'

// @ts-ignore
export default compose(
  connect(HISTORY_QUERY),
  loadable,
)(History)
