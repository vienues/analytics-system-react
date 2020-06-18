import baseStyled, { ThemedStyledInterface } from 'styled-components'
import { Theme } from './themes'

export { colors } from './colors'
export type {
  LightShade,
  DarkShade,
  ColorPalette,
  AccentName,
  AccentPaletteMap,
  Color
} from './colors'

export { default as GlobalStyle } from './globals'

export const styled: ThemedStyledInterface<Theme> = baseStyled

export { ThemeName, ThemeProvider, ThemeConsumer, useTheme } from './ThemeContext'
export type {
  Theme,
  TouchableIntentName,
  IColorProps as ColorProps,
  ThemeSelector
} from './themes'
export { themes, getThemeColor } from './themes'
export { default as ThemeStorageSwitch } from './ThemeStorageSwitch'
