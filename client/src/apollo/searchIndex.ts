import * as R from 'ramda'
import Fuse from 'fuse.js'
// @ts-ignore
import data from '@adaptive-insights/data'

const INDEX = new Fuse(data.referenceSymbols.slice(0, 1000), {
  keys: [{ name: 'id', weight: 0.99 }, { name: 'name', weight: 0.1 }],

  threshold: 0.3,
  location: 0,
  distance: 8,
  maxPatternLength: 32,
  minMatchCharLength: 2,

  // Sort by lexical score, market percentage, volume
  shouldSort: true,

  sortFn: (a: any, b: any) => {
    return (
      a.score -
      b.score -
      ((a.item.marketPercent < b.item.marketPercent && b.score / 3) as any) -
      ((a.item.volume < b.item.volume && b.score / 3) as any)
    )
  },
})

const SYMBOL_MAP = data.referenceSymbols.reduce((acc: any, symbol: any) => {
  R.times(R.add(1), symbol.id.length).forEach(index => {
    const id = symbol.id.slice(0, index)
    const target = acc.get(id) || []

    if (target.length <= 5) {
      acc.set(id, target.concat(symbol))
    }
  })

  return acc
}, new Map())

export function search(term = '') {
  if (!term) {
    return []
  }

  if (term.length === 1) {
    return SYMBOL_MAP.get(term.toUpperCase()) || []
  }

  // @ts-ignore
  return R.compose(
    // @ts-ignore
    R.uniqBy(R.prop('id')),
    R.filter(R.identity as any),
    R.flatten,
  )([INDEX.search(term), SYMBOL_MAP.get(term.toUpperCase())])
}

export default {
  search,
}
