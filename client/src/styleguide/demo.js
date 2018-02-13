import _ from 'lodash'

const rgb = (r, g, b, a = 1) => `rgba(${r}, ${g}, ${b}, ${a})`
const flatten = colorSets =>
  _.reduce(
    colorSets,
    (acc, set, name) => {
      _.forEach(set, (value, level) => {
        acc[`${name}${level}`] = value
      })

      return acc
    },
    {},
  )

export const offwhite = {
  '': rgb(255, 255, 255),
}

export const offblack = {
  '': rgb(0, 2, 5),
}

export const primary = {
  '': rgb(39, 87, 140),
  '100': rgb(39, 87, 140),
  '125': rgb(29, 65, 105),
  '70a': rgb(39, 87, 140, 0.7),
  '50a': rgb(39, 87, 140, 0.5),
  '30a': rgb(39, 87, 140, 0.3),
}

export const secondary = {
  '': rgb(248, 248, 248),
  '100': rgb(248, 248, 248),
  '105': rgb(236, 236, 236),
  '70': rgb(223, 223, 223),
  '50': rgb(198, 198, 198),
  '30': rgb(174, 174, 174),
}

export const red = {
  '': rgb(233, 86, 86),
  '100': rgb(233, 86, 86),
  '115': rgb(198, 73, 73),
  '70a': rgb(233, 86, 86, 0.7),
  '50a': rgb(233, 86, 86, 0.5),
}

export const green = {
  '': rgb(145, 228, 165),
  '100': rgb(145, 228, 165),
  '115': rgb(123, 194, 140),
  '70a': rgb(145, 228, 165, 0.7),
  '50a': rgb(145, 228, 165, 0.5),
}

export const yellow = {
  '': rgb(255, 187, 94),
  '100': rgb(255, 187, 94),
  '115': rgb(217, 159, 79),
  '70a': rgb(255, 187, 94, 0.7),
  '50a': rgb(255, 187, 94, 0.5),
}

export const blue = {
  '': rgb(0, 104, 255),
  '100': rgb(0, 104, 255),
  '115': rgb(0, 88, 217),
  '70a': rgb(0, 104, 255, 0.7),
  '50a': rgb(0, 104, 255, 0.5),
}

export const colors = flatten({
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
