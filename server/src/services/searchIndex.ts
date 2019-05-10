import * as R from 'ramda'
import Fuse from 'fuse.js'
import data from '../mock-data/referenceSymbols.json'
import { RefSymbol } from '../types'

type SearchResult<T> = { item?: T } & { score: number }

const INDEX = new Fuse<RefSymbol>(data.slice(0, 1000), {
  keys: [{ name: 'id', weight: 0.99 }, { name: 'name', weight: 0.1 }],

  threshold: 0.3,
  location: 0,
  distance: 8,
  maxPatternLength: 32,
  minMatchCharLength: 2,

  // Sort by lexical score, market percentage, volume
  shouldSort: true,
  sortFn: (a: SearchResult<RefSymbol>, b: SearchResult<RefSymbol>) => {
    return (
      a.score -
      b.score -
      (a.item!.marketPercent < b.item!.marketPercent ? b.score / 3 : 0) -
      (a.item!.volume < b.item!.volume ? b.score / 3 : 0)
    )
  },
})

const SYMBOL_MAP: Map<string, RefSymbol[]> = data.reduce((acc, symbol) => {
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

  const results = [...(INDEX.search(term) || []), ...(SYMBOL_MAP.get(term.toUpperCase()) || [])]

  return R.uniqBy(s => s.id, results.filter(Boolean))
}

export default search
