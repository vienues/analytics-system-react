import * as rebassTheme from 'rebass'
// @ts-ignore
import { gradients, colors } from '@adaptive-insights/common'

export const theme = {
  ...rebassTheme,
  fontFamily: `'Lato', -apple-system, BlinkMacSystemFont, sans-serif`,
  space: [0, 8, 16, 32, 48, 64, 128],
  weights: [200, 600],
  colors,
  gradients,
}

export default theme
