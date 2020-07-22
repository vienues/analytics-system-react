export type PlatformName = 'browser' | 'openfin'
export type PlatformType = 'browser' | 'desktop'

export interface WindowPosition {
  visible: boolean
  x?: number
  y?: number
}

export interface TilesLayout {
  [key: string]: WindowPosition
}

export interface WindowConfig {
  name: string
  url: string
  width: number
  height: number
  minHeight?: number
  minWidth?: number
  maxHeight?: number
  maxWidth?: number
  center?: 'parent' | 'screen'
  x?: number
  y?: number
  saveWindowState?: boolean
}

export interface AppConfig {
  url?: string
  icon?: string
  uuid?: string
  payload?: string | object
  topic?: string
}
