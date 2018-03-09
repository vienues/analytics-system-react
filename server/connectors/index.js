import * as real from './iex'
import * as fake from './faker'

export default function getDataSource(offlineMode) {
  return typeof offlineMode === 'string' && offlineMode.toLowerCase() === 'true' ? fake : real
}
