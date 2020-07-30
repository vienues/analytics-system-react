import React from 'react'
import { useContext } from 'react'
import { Platform } from './platform'
import BrowserPlatform from './browser/browserPlatform'

// default context is browser
const PlatformContext = React.createContext<Platform>(new BrowserPlatform())

export const { Provider: PlatformProvider } = PlatformContext

export function usePlatform() {
  return useContext(PlatformContext)
}
