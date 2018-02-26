import { loadable } from '../../common'
import { compose } from 'recompose'

import connect from './connector'
import News from './News'

export default compose(connect(News.fragment), loadable)(News)
