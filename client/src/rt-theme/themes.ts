import { darken } from 'polished'
import { keyframes } from 'styled-components'

import { AccentName, AccentPaletteMap, Color, colors, CorePalette, ICorePaletteMap, template } from './colors'

interface IBaseTheme {
  white: Color
  black: Color
  transparent: Color

  primary: CorePalette
  secondary: CorePalette
  accents: AccentPaletteMap
  colors: typeof colors

  motion: IMotion & {
    fast: IMotion
    normal: IMotion
    slow: IMotion
  }

  shell: IColorPair

  overlay: IColorPair

  button: TouchableStyleSet

  // Known extensible properties
  backgroundColor: Color
  textColor: Color
}

interface ITouchable {
  backgroundColor: Color
  textColor: Color

  active: IColorPair
  disabled: IColorPair
}
export type TouchableIntentName = AccentName | 'primary' | 'secondary' | 'mute'
type TouchableStyleSet = { [style in TouchableIntentName]: ITouchable }

interface IMotion {
  duration: number
  easing: string
}

interface IColorPair {
  backgroundColor: string
  textColor?: string
}

const createTheme = ({ primary, secondary, core }: ICorePaletteMap, accents: AccentPaletteMap) => ({
  core,
  template,

  black: colors.static.black,
  transparent: colors.static.transparent,
  white: colors.static.white,

  backgroundColor: core.darkBackground,
  textColor: core.textColor,

  accents,
  colors,
  primary,
  secondary,

  motion: {
    duration: 16 * 16,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',

    fast: {
      duration: 16 * 16,
      easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
    },

    normal: {
      duration: 16 * 16,
      easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    },

    slow: {
      duration: 16 * 16,
      easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    },
  },

  overlay: {
    backgroundColor: darken(0.1, primary[1]),
    textColor: secondary[2],
  },

  tile: {
    inputColor: secondary[4],
  },

  flash: keyframes`
    0% {
      background-color: ${primary.base};
    }
    50% {
      background-color: ${accents.dominant.darker};
    }
    100% {
      background-color: ${primary.base};
    }
  `,

  button: {
    mute: {
      backgroundColor: primary.base,
      textColor: secondary.base,

      active: {
        backgroundColor: primary[4],
      },
      disabled: {
        backgroundColor: primary[3],
      },
    },

    primary: {
      backgroundColor: accents.dominant.base,
      textColor: colors.light.primary.base,

      active: {
        backgroundColor: accents.dominant.darker,
      },
      disabled: {
        backgroundColor: accents.dominant.lighter,
      },
    },

    secondary: {
      backgroundColor: secondary.base,
      textColor: primary.base,

      active: {
        backgroundColor: secondary[3],
      },
      disabled: {
        backgroundColor: secondary[4],
      },
    },
    ...Object.entries(accents).reduce((a, [key, { base, darker, lighter }]) => {
      a[key] = {
        active: {
          backgroundColor: darker,
        },
        backgroundColor: base,
        disabled: {
          backgroundColor: lighter,
        },
        textColor: colors.light.primary.base,
      }
      return a
    }, {}),
  } as TouchableStyleSet,
})

type GeneratedTheme = ReturnType<typeof createTheme>
export type Theme = IBaseTheme & GeneratedTheme

export type ThemeSelector = (theme: Theme) => Color

export interface IColorProps {
  bg?: ThemeSelector
  fg?: ThemeSelector
}

function isColor(value: string | ThemeSelector): value is Color {
  return typeof value === 'string' && /^(#|rgb|hsl)/.test(value)
}
export const getThemeColor = (theme: Theme, color: Color | ThemeSelector, fallback?: Color) =>
  typeof color === 'function' ? color(theme) || fallback : isColor(color) ? color : fallback

const lightTheme = createTheme(colors.light, colors.accents)
const darkTheme = createTheme(colors.dark, colors.accents)
// Manual overrides
darkTheme.button.secondary.textColor = darkTheme.primary.base

export const themes = {
  dark: darkTheme,
  light: lightTheme,
}
