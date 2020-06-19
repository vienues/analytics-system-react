export type Color = string

export interface PrimaryPalette {
  corePrimary: Color
  corePrimary1: Color
  corePrimary2: Color
  corePrimary3: Color
  corePrimary4: Color
  corePrimary5: Color
}

export interface SecondaryPalette {
  coreSecondary: Color
  coreSecondary1: Color
  coreSecondary2: Color
  coreSecondary3: Color
  coreSecondary4: Color
  coreSecondary5: Color
}

export interface AccentPalette {
  accentPrimary: Color
  accentPrimary1: Color
  accentPrimary2: Color
  accentPositive: Color
  accentPositive1: Color
  accentPositive2: Color
  accentPositive3: Color
  accentBeAware: Color
  accentBeAware1: Color
  accentBeAware2: Color
  accentBeAware3: Color
  accentNegative: Color
  accentNegative1: Color
  accentNegative2: Color
  accentNegative3: Color
  tradingSell: Color
  tradingSell1: Color
  tradingBuy: Color
  tradingBuy1: Color
}

export interface ColorPalettes {
  primary: PrimaryPalette
  secondary: SecondaryPalette
  accents: AccentPalette
}

export const light: ColorPalettes = {
  primary: {
    corePrimary: '#323232',
    corePrimary1: '#383838',
    corePrimary2: '#4D4D4D',
    corePrimary3: '#555555',
    corePrimary4: '#6B6B6B',
    corePrimary5: '#7F7F7F',
  },
  secondary: {
    coreSecondary: '#FFFFFF',
    coreSecondary1: '#F9F9F9',
    coreSecondary2: '#F2F2F2',
    coreSecondary3: '#E4E4E4',
    coreSecondary4: '#CFCFCF',
    coreSecondary5: '#BBBBBB',
  },
  accents: {
    accentPrimary: '#AAABD1',
    accentPrimary1: '#767791',
    accentPrimary2: '#C3C4DE',
    accentPositive: '#01C38D',
    accentPositive1: '#03A077',
    accentPositive2: '#33CFA3',
    accentPositive3: '#99E7D1',
    accentBeAware: '#FF8D00',
    accentBeAware1: '#E57E00',
    accentBeAware2: '#FFC57F',
    accentBeAware3: '#FFE8CC',
    accentNegative: '#FF274B',
    accentNegative1: '#E62343',
    accentNegative2: '#FCA5A5',
    accentNegative3: '#FFD3DB',
    tradingSell: '#FF274B',
    tradingSell1: '#FFD3DB',
    tradingBuy: '#2D95FF',
    tradingBuy1: '#BFDEFF',
  },
}

export const dark: ColorPalettes = {
  primary: {
    corePrimary: '#FFFFFF',
    corePrimary1: '#F9F9F9',
    corePrimary2: '#F2F2F2',
    corePrimary3: '#E4E4E4',
    corePrimary4: '#CFCFCF',
    corePrimary5: '#BBBBBB',
  },
  secondary: {
    coreSecondary: '#323232',
    coreSecondary1: '#383838',
    coreSecondary2: '#4D4D4D',
    coreSecondary3: '#555555',
    coreSecondary4: '#6B6B6B',
    coreSecondary5: '#7F7F7F',
  },
  accents: {
    accentPrimary: '#AAABD1',
    accentPrimary1: '#767791',
    accentPrimary2: '#C3C4DE',
    accentPositive: '#01C38D',
    accentPositive1: '#03A077',
    accentPositive2: '#33CFA3',
    accentPositive3: '#99E7D1',
    accentBeAware: '#FF8D00',
    accentBeAware1: '#E57E00',
    accentBeAware2: '#FFC57F',
    accentBeAware3: '#FFE8CC',
    accentNegative: '#FF274B',
    accentNegative1: '#E62343',
    accentNegative2: '#FCA5A5',
    accentNegative3: '#FFD3DB',
    tradingSell: '#FF274B',
    tradingSell1: '#FFD3DB',
    tradingBuy: '#2D95FF',
    tradingBuy1: '#BFDEFF',
  },
}

export const colors = {
  dark,
  light,
}
