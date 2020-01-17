import baseStyled, { ThemedStyledInterface } from 'styled-components'
import * as Colors from './colors'
import * as Themes from './themes'

const colors = Colors.colors
export { colors }
export type LightShade = Colors.LightShade
export type DarkShade = Colors.DarkShade
export type ColorPalette = Colors.ColorPalette
export type AccentName = Colors.AccentName
export type AccentPaletteMap = Colors.AccentPaletteMap
export type Color = Colors.Color
export { default as GlobalStyle } from './globals'

export const styled: ThemedStyledInterface<Theme> = baseStyled

export { ThemeName, ThemeProvider, ThemeConsumer, useTheme } from './ThemeContext'
export type Theme = Themes.Theme
export type TouchableIntentName = Themes.TouchableIntentName
export type ColorProps = Themes.IColorProps
export type ThemeSelector = Themes.ThemeSelector
const themes = Themes.themes
const getThemeColor = Themes.getThemeColor
export { themes, getThemeColor }
export { default as ThemeStorageSwitch } from './ThemeStorageSwitch'
