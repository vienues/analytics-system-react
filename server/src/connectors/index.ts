import * as real from 'iexcloud_api_wrapper'
import { default as faker } from './faker'

export default function getDataSource(offlineMode?: string) {
  return offlineMode && offlineMode.match(/true/i) ? faker : real
}
