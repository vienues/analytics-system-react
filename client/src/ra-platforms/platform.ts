import { AppConfig, PlatformType } from './types'
import { Observable } from 'rxjs'
import { PlatformWindow, PlatformWindowApi } from './platformWindow'

export interface PlatformFeatures {
  app: AppInterop
  interop: PubSubInterop
  share: (object: any) => void
  allowPopIn?: boolean
}

interface PubSubInterop {
  subscribe$: (topic: string) => Observable<any>
  publish: (topic: string, message: any) => void
}

interface AppInterop {
  open: (id: string, config: AppConfig) => Promise<string>
}

export type Platform = Partial<PlatformFeatures> & {
  readonly type: PlatformType

  readonly allowTearOff?: boolean

  readonly name: string

  readonly window?: PlatformWindowApi & PlatformWindow

  readonly PlatformHeader?: React.FC<any>

  readonly PlatformControls?: React.FC<any>

  readonly PlatformRoute?: React.FC
}
