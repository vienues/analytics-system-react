import { Context } from 'openfin-fdc3'
import { search_symbols } from 'containers/search/graphql/types/search'

export const getStockContext = (symbol: search_symbols): Context => ({
  type: 'fdc3.instrument',
  name: symbol.name,
  id: {
    ticker: symbol.id,
  },
})
