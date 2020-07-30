import { PlatformType } from './types'
import { search_symbols } from '__generated__/types'

export interface Platform {
  readonly name: string
  readonly type: PlatformType

  readonly symbolSelected: (symbol: search_symbols) => void
  readonly openUrl: (href: string) => void
}

export abstract class PlatformBase implements Platform {
  readonly abstract name: string
  readonly abstract type: PlatformType

  readonly openUrl = (href: string) =>  { 
    window.open(href) 
  }
  
  readonly symbolSelected = (symbol: search_symbols) => {}
}