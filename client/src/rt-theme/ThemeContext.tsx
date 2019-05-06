import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { themes } from './themes'

export enum ThemeName {
  Light = 'light',
  Dark = 'dark',
}

interface IProps {
  storage?: typeof localStorage | typeof sessionStorage
}

interface IContextValue {
  themeName?: string
  setTheme: (selector: { themeName: ThemeName }) => void
}

const ThemeContext = React.createContext<IContextValue>({
  setTheme: () => null,
})

const STORAGE_KEY = 'themeName'

const ThemeStorageProvider: React.FunctionComponent<IProps> = props => {
  const [initialized, setInitialized] = useState(false)
  const [themeName, setThemeName] = useState<ThemeName>(ThemeName.Dark)

  const storage = props.storage || localStorage

  const setThemeFromStorage = (event?: StorageEvent) => {
    if (event == null || event.key === STORAGE_KEY) {
      const storedThemeName = storage.getItem(STORAGE_KEY) as ThemeName
      if (storedThemeName && themes[storedThemeName] != null) {
        setTheme({ themeName: storedThemeName })
      }
    }
  }

  const setTheme: (selector: { themeName: ThemeName }) => void = selector => {
    if (selector.themeName !== themeName) {
      setThemeName(selector.themeName)
      storage.setItem(STORAGE_KEY, selector.themeName)
    }
  }

  useEffect(() => {
    if (!initialized) {
      setInitialized(true)
      setThemeFromStorage()
      window.addEventListener('storage', setThemeFromStorage)
    }
    return () => window.removeEventListener('storage', setThemeFromStorage)
  })

  return (
    <ThemeContext.Provider value={{ themeName, setTheme }}>
      <StyledThemeProvider theme={themes[themeName]}>
        <>{props.children}</>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const { themeName, setTheme } = useContext(ThemeContext)
  const toggleTheme = () =>
    setTheme({
      themeName: themeName === ThemeName.Dark ? ThemeName.Light : ThemeName.Dark,
    })
  return { themeName, setTheme, toggleTheme }
}

export const ThemeProvider = ThemeStorageProvider
export const ThemeConsumer = ThemeContext.Consumer
