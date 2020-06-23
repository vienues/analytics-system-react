import { darken } from 'polished'
import { keyframes } from 'styled-components'

import { Color, colors, ColorPalettes, PrimaryPalette, SecondaryPalette, AccentPalette } from './colors'

interface IBaseTheme {
  white: Color
  black: Color
  transparent: Color

  primary: PrimaryPalette
  secondary: SecondaryPalette
  accents: AccentPalette
  colors: typeof colors

  motion: IMotion & {
    fast: IMotion
    normal: IMotion
    slow: IMotion
  }

  shell: IColorPair

  overlay: IColorPair

  backgroundColor: Color
  textColor: Color
}

interface IMotion {
  duration: number
  easing: string
}

interface IColorPair {
  backgroundColor: string
  textColor?: string
}

interface ITouchable {
  backgroundColor: Color
  textColor: Color

  active: IColorPair
  disabled: IColorPair
}
export type TouchableIntentName = 'primary' | 'secondary' | 'mute'
type TouchableStyleSet = { [style in TouchableIntentName]: ITouchable }

const createTheme = ({ primary, secondary, accents }: ColorPalettes) => ({
  black: '#000000',
  transparent: '#00000000',
  white: '#FFFFFF',

  backgroundColor: primary.corePrimary,
  textColor: secondary.coreSecondary,

  fontSizeBaseline: 16,

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
    backgroundColor: darken(0.1, primary.corePrimary4),
    textColor: secondary.coreSecondary2,
  },

  tile: {
    inputColor: secondary.coreSecondary4,
  },

  flash: keyframes`
    0% {
      background-color: ${primary.corePrimary};
    }
    50% {
      background-color: ${accents.accentBeAware};
    }
    100% {
      background-color: ${primary.corePrimary};
    }
  `,

  button: {
    mute: {
      backgroundColor: primary.corePrimary,
      textColor: secondary.coreSecondary,

      active: {
        backgroundColor: primary.corePrimary4,
      },
      disabled: {
        backgroundColor: primary.corePrimary3,
      },
    },

    primary: {
      backgroundColor: accents.accentPositive,
      textColor: primary.corePrimary,

      active: {
        backgroundColor: accents.accentPositive3,
      },
      disabled: {
        backgroundColor: accents.accentNegative3,
      },
    },

    secondary: {
      backgroundColor: secondary.coreSecondary,
      textColor: primary.corePrimary,

      active: {
        backgroundColor: secondary.coreSecondary3,
      },
      disabled: {
        backgroundColor: secondary.coreSecondary4,
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
        textColor: secondary.coreSecondary,
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

const lightTheme = createTheme(colors.light)
const darkTheme = createTheme(colors.dark)
// Manual overrides
darkTheme.button.secondary.textColor = darkTheme.primary.corePrimary

export const themes = {
  dark: darkTheme,
  light: lightTheme,
}
