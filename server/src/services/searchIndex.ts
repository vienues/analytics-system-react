import Fuse from 'fuse.js'
import * as R from 'ramda'
import data from '../mock-data/referenceSymbols.json'
import { IRefSymbol } from '../types'
import logger from './logger'

type SearchResult<T> = { item?: T } & { score: number }

const INDEX = new Fuse<IRefSymbol>(data.slice(0, 1000), {
  distance: 8,
  keys: [
    { name: 'id', weight: 0.99 },
    { name: 'name', weight: 0.1 },
  ],
  location: 0,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  threshold: 0.3,

  // Sort by lexical score, market percentage, volume
  shouldSort: true,
  sortFn: (a: SearchResult<IRefSymbol>, b: SearchResult<IRefSymbol>) => {
    return (
      a.score -
      b.score -
      (a.item!.marketPercent < b.item!.marketPercent ? b.score / 3 : 0) -
      (a.item!.volume < b.item!.volume ? b.score / 3 : 0)
    )
  },
})

const SYMBOL_MAP: Map<string, IRefSymbol[]> = data.reduce((acc, symbol) => {
  R.times(R.add(1), symbol.id.length).forEach(index => {
    const id = symbol.id.slice(0, index)
    const target = acc.get(id) || []
    if (target.length <= 5 || id === symbol.id) {
      acc.set(id, target.concat(symbol))
    }
  })
  return acc
}, new Map())

export function search(term = '') {
  const maxReturnLength: number = 8

  if (!term) {
    return []
  }

  if (term.length === 1) {
    return SYMBOL_MAP.get(term.toUpperCase()) || []
  }

  const results = [
    ...(INDEX.search(term, { limit: maxReturnLength }) || []),
    ...(SYMBOL_MAP.get(term.toUpperCase()) || []),
  ]

  return R.uniqBy(s => s.id, results.filter(Boolean)).slice(0, maxReturnLength + 1)
}

export default search
