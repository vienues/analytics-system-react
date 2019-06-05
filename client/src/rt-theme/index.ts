import baseStyled, { ThemedStyledInterface } from 'styled-components'
import { AccentName, AccentPaletteMap, Color, ColorPalette, colors, DarkShade, LightShade } from './colors'
import { getThemeColor, IColorProps, Theme, themes, ThemeSelector, TouchableIntentName } from './themes'
export { colors }
export type LightShade = LightShade
export type DarkShade = DarkShade
export type ColorPalette = ColorPalette
export type AccentName = AccentName
export type AccentPaletteMap = AccentPaletteMap
export type Color = Color
export { default as GlobalStyle } from './globals'

export const styled: ThemedStyledInterface<Theme> = baseStyled

export { ThemeName, ThemeProvider, ThemeConsumer, useTheme } from './ThemeContext'
export type Theme = Theme
export type TouchableIntentName = TouchableIntentName
export type ColorProps = IColorProps
export type ThemeSelector = ThemeSelector
export { themes, getThemeColor }
export { default as ThemeStorageSwitch } from './ThemeStorageSwitch'
