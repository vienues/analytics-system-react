import * as real from './iex'
import * as fake from './faker'

export default function getDataSource(offlineMode) {
  return offlineMode && offlineMode.match(/true/i) ? fake : real
}
