import { loadable } from './loadable'
import { compose } from 'recompose'

import connect from './connector'
import History from './History'

export default compose(connect(History.fragment), loadable)(History)
