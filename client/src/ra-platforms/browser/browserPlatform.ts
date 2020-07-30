import { PlatformBase } from '../platform'

export default class BrowserPlatform extends PlatformBase {
  readonly name = 'browser'
  readonly type = 'browser'
}
