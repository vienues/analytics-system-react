import { gradients, colors } from './styleguide/colors';

export const theme = {
  space: [0, 8, 16, 32, 48, 64, 128],
  weights: [200, 600],
  colors: {
    // ...rebassTheme.colors,
    // ...flatten(palx(colorguide.colors.accent)),
    ...colors,
  },
  gradients,
};

export default theme;
