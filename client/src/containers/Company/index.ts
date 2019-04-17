import { loadable } from '../../common'
import { compose } from 'recompose'

import connect from './connector'
import Company, { COMPANY_QUERY } from './Company'

// @ts-ignore
export default compose(
  connect(COMPANY_QUERY),
  loadable,
)(Company)
