import baseStyled, { ThemedStyledInterface } from 'styled-components'
import { Theme } from './themes'

export { colors } from './colors'
export type { Color } from './colors'
export { default as GlobalStyle } from './globals'
export { ThemeConsumer, ThemeName, ThemeProvider, useTheme } from './ThemeContext'
export { getThemeColor, themes } from './themes'
export type { IColorProps as ColorProps, Theme, ThemeSelector, TouchableIntentName } from './themes'
export { default as ThemeStorageSwitch } from './ThemeStorageSwitch'

export const styled: ThemedStyledInterface<Theme> = baseStyled
