import _ from 'lodash'
import palx from 'palx'

const rgb = (r, g, b, a = 1) => `rgba(${r}, ${g}, ${b}, ${a})`
export const flatten = colorSets =>
  _.reduce(
    colorSets,
    (acc, set, name) => {
      _.forEach(set, (value, level) => {
        acc[`${name}${level}`] = value

        // add `color` for `100`
        if (level === '100') {
          acc[name] = value
        }
      })

      return acc
    },
    {},
  )


// Derived palette from accent color
const palette = palx('#0068ff')

export const transparent = {
  '100': rgb(255, 255, 255, 0)
}

export const white = {
  '100': rgb(255, 255, 255),
  '70a': rgb(255, 255, 255, .7),
  '50a': rgb(255, 255, 255, .5),
  '30a': rgb(255, 255, 255, .3),
}

export const black = {
  '100': rgb(0, 0, 0),
  '70a': rgb(0, 0, 0, .7),
  '50a': rgb(0, 0, 0, .5),
  '30a': rgb(0, 0, 0, .3),
}

export const offwhite = {
  '100': palette.gray[0],
  '70': palette.gray[1],
  '50': palette.gray[7],
  // '50': rgb(190, 204, 220),
  '30': palette.gray[3],
}

export const offblack = {
  '100': rgb(0, 2, 5),
  '70': palette.gray[9],
  '50': palette.gray[8],
  '30': palette.gray[7],
}

export const primary = {
  '100': rgb(39, 87, 140),
  '125': rgb(29, 65, 105),
  '70a': rgb(39, 87, 140, 0.7),
  '50a': rgb(39, 87, 140, 0.5),
  '30a': rgb(39, 87, 140, 0.3),
  '70': rgb(27, 61, 96),
}

export const secondary = {
  '100': rgb(248, 248, 248),
  '105': rgb(236, 236, 236),
  '70': rgb(223, 223, 223),
  '50': rgb(198, 198, 198),
  '30': rgb(174, 174, 174),
}

export const red = {
  '100': rgb(233, 86, 86),
  '115': rgb(198, 73, 73),
  '70a': rgb(233, 86, 86, 0.7),
  '50a': rgb(233, 86, 86, 0.5),
}

export const green = {
  '100': rgb(145, 228, 165),
  '115': rgb(123, 194, 140),
  '70a': rgb(145, 228, 165, 0.7),
  '50a': rgb(145, 228, 165, 0.5),
}

export const yellow = {
  '100': rgb(255, 187, 94),
  '115': rgb(217, 159, 79),
  '70a': rgb(255, 187, 94, 0.7),
  '50a': rgb(255, 187, 94, 0.5),
}

export const blue = {
  '100': rgb(0, 104, 255),
  '115': rgb(0, 88, 217),
  '70a': rgb(0, 104, 255, 0.7),
  '50a': rgb(0, 104, 255, 0.5),
}

export const colors = flatten({
  transparent,
  white,
  black,
  offwhite,
  offblack,
  primary,
  secondary,
  red,
  green,
  yellow,
  blue,
  bad: red,
  good: green,
  alert: yellow,
  accent: blue,
})

export const gradients = {
  primary: [rgb(0, 46, 113), rgb(0, 2, 5)],
  secondary: [rgb(0, 38, 93), rgb(0, 32, 79)],
}
