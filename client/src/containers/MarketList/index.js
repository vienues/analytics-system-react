import { loadable } from '../../common/'

import connect from './connector'
import MarketList from './MarketsList'

export default connect(loadable(MarketList))
