import { loadable } from '../../common'
import { compose } from 'recompose'

import connect from './connector'
import News, { NEWS_QUERY } from './News'

// @ts-ignore
export default compose(
  connect(NEWS_QUERY),
  loadable,
  // @ts-ignore
)(News)
