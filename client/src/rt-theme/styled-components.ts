import { AccentPalette, Color, PrimaryPalette, SecondaryPalette } from './colors'
import { IMotion, TouchableStyleSet } from './themes'

declare module 'styled-components/macro' {
  export interface DefaultTheme {
    primary: PrimaryPalette
    secondary: SecondaryPalette
    accents: AccentPalette

    button: TouchableStyleSet

    motion: IMotion & {
      fast: IMotion
      normal: IMotion
      slow: IMotion
    }

    textColor: Color
  }
}
