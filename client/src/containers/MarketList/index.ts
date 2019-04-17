import { loadable } from '../../common/'

import connect from './connector'
import MarketList from './MarketsList'

// @ts-ignore
export default connect(loadable(MarketList))
