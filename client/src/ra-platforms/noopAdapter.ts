import { Platform } from './platform'

export default class NoopPlatformAdapter implements Platform {
  readonly name = 'noop'
  readonly type = 'browser'
}
