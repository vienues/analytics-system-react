import _ from 'lodash';
import palx from 'palx'
import rebassTheme from 'rebass/dist/theme'

import { gradients, colors, flatten } from './styleguide/colors'

export const theme = {
  space: [0, 8, 16, 32, 48, 64, 128],
  weights: [200, 600],
  colors: {
    // ...rebassTheme.colors,
    // ...flatten(palx(colorguide.colors.accent)),
    ...colors,
  },
  gradients
}

export default theme
