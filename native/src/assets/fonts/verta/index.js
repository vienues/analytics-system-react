export const extrathin = require('./verta-extrathin.ttf')
export const extrathinitalic = require('./verta-extrathinitalic.ttf')
export const thin = require('./verta-thin.ttf')
export const thinitalic = require('./verta-thinitalic.ttf')
export const light = require('./verta-light.ttf')
export const lightitalic = require('./verta-lightitalic.ttf')
export const regular = require('./verta-regular.ttf')
export const regularitalic = require('./verta-regularitalic.ttf')
export const semibold = require('./verta-semibold.ttf')
export const semibolditalic = require('./verta-semibolditalic.ttf')
export const bold = require('./verta-bold.ttf')
export const bolditalic = require('./verta-bolditalic.ttf')
export const extrabold = require('./verta-extrabold.ttf')
export const extrabolditalic = require('./verta-extrabolditalic.ttf')
export const black = require('./verta-black.ttf')
export const blackitalic = require('./verta-blackitalic.ttf')

export const faces = {
  extrathin,
  extrathinitalic,
  thin,
  thinitalic,
  light,
  lightitalic,
  regular,
  regularitalic,
  semibold,
  semibolditalic,
  bold,
  bolditalic,
  extrabold,
  extrabolditalic,
  black,
  blackitalic,
}

export default Object.keys(faces).reduce((acc, key) => {
  acc[`verta-${key}`] = faces[key]

  return acc
}, {})
