import { Platform } from '../platform'

export default class PWA implements Platform {
  readonly name = 'pwa'
  readonly type = 'desktop'
}
