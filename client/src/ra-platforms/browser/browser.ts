import { Platform } from '../platform'

export default class Browser implements Platform {
  readonly name = 'browser'
  readonly type = 'browser'
}
