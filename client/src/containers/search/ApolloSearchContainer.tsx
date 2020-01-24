import Fdc3Context from 'containers/fdc3/fdc3-context'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { withRouter } from 'react-router-dom'
import {
  MarketSegment,
  search as SimpleSearchQuery,
  search_symbols,
  searchQuery,
  searchQueryVariables,
  searchVariables,
} from '../../__generated__/types'
import apolloClient from '../../apollo/client'
import { AppQuery } from '../../common/AppQuery'
import { AppQueryForceRefetcher } from '../../common/AppQueryForceRetry'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import OpenfinService from '../../openfin/OpenfinService'
import { SearchInput } from './components'
import SimpleSearchConnection from './graphql/SimpleSearchConnection.graphql'
import SearchbarConnection from './graphql/SearchbarConnection.graphql'
import { SearchContext, SearchContextActionTypes } from './SearchContext'
import { SearchErrorCard } from './SearchErrorCard'
import AdaptiveLoader from '../../common/AdaptiveLoader'

interface IProps extends IApolloContainerProps {
  url?: string
  market: MarketSegment
}

type Props = RouteComponentProps & IProps

const ApolloSearchContainer: React.FunctionComponent<Props> = ({ id, history, url, market }: Props) => {
  const [currentText, setCurrentText] = useState<string>('')

  const { currentSymbol, refetchAttempts, searching, dispatch } = useContext(SearchContext)
  const currencyPairContext = useContext(Fdc3Context)

  const hasCurrencyPairContext = currencyPairContext && currencyPairContext.market === 'CURRENCY'
  const instrumentId = hasCurrencyPairContext ? currencyPairContext.name : id
  const placeholderTest = {
    crypto: 'Enter a crypto currency or ticket symbol...',
    currency: 'Enter a currency pair...',
    stock: 'Enter a stock or symbol...',
  }

  const handleChange = useCallback(
    (symbol: search_symbols | null) => {
      if (dispatch) {
        dispatch({
          type: SearchContextActionTypes.SelectedSymbol,
          payload: { currentSymbol: symbol },
        })
      }
      if (symbol) {
        history.push(`/${(symbol.marketSegment || url || '').toLowerCase()}/${symbol.id}`)
        OpenfinService.NavigateToStock(symbol.id)
      } else {
        history.push(`/${url}`)
      }
    },
    [dispatch, history, url],
  )

  useEffect(() => {
    if (dispatch) {
      if (instrumentId) {
        dispatch({ type: SearchContextActionTypes.FindSymbol })
      } else {
        dispatch({ type: SearchContextActionTypes.ClearedSymbol })
      }
    }
  }, [dispatch, instrumentId])

  useEffect(() => {
    let refetchTimeout: number = 0
    if (searching && dispatch && instrumentId) {
      let foundSymbol: search_symbols | undefined
      apolloClient
        .query<searchQuery, searchQueryVariables>({
          errorPolicy: 'all',
          query: SearchbarConnection,
          variables: { id: instrumentId.toUpperCase(), market: market.toUpperCase() },
        })
        .then((result: any) => {
          console.log('result...', result)
          if (result.data && result.data.stock) {
            foundSymbol = {
              id: result.data.stock.id,
              name: result.data.stock.company.name,
            } as search_symbols
            if (result.data.stock.id === instrumentId.toUpperCase()) {
              dispatch({
                type: SearchContextActionTypes.FoundSymbol,
                payload: { currentSymbol: foundSymbol },
              })
              if (hasCurrencyPairContext) {
                history.replace(`/${url}/${result.data.stock.id}`)
                OpenfinService.NavigateToStock(result.data.stock.id)
              }
            } else {
              throw new Error('Returned symbol does not match requested symbol.')
            }
            return Promise.resolve()
          } else {
            return AppQueryForceRefetcher(
              result,
              () => dispatch({ type: SearchContextActionTypes.AttemptRefetchSymbol }),
              true,
            ).then((refetcher: number) => {
              refetchTimeout = refetcher
              if (refetchTimeout) {
                return Promise.resolve()
              } else {
                throw new Error('Symbol not recognized.')
              }
            })
          }
        })
        .catch(ex => {
          dispatch({
            type: SearchContextActionTypes.UnrecognizedSymbol,
            payload: {
              errorMessage: (
                <SearchErrorCard id={instrumentId} market={market} foundSymbol={foundSymbol} onClick={handleChange} />
              ),
            },
          })
        })
    }
    return () => {
      if (!searching && refetchTimeout) {
        clearTimeout(refetchTimeout)
        refetchTimeout = 0
      }
    }
  }, [dispatch, history, instrumentId, market, refetchAttempts, searching, url, handleChange, hasCurrencyPairContext])

  const onTextChange = (text: string) => {
    setCurrentText(text)
  }

  const onSearchInputResults = (
    stockSearch: SimpleSearchQuery | null,
    fxSearch?: SimpleSearchQuery | null,
  ): JSX.Element => {
    if (!(currentSymbol && currentSymbol.id) && id && searching) {
      return <AdaptiveLoader size={50} speed={1.4} />
    }

    const stockSymbols = stockSearch ? stockSearch.symbols.map(s => ({ ...s, marketSegment: MarketSegment.STOCK })) : []
    const fxSymbols = fxSearch ? fxSearch.symbols.map(s => ({ ...s, marketSegment: MarketSegment.CURRENCY })) : []
    const symbols = stockSymbols
      .concat(fxSymbols)
      .sort((a, b) => (a.id < b.id ? -1 : 1))
      .slice(0, 9)

    return (
      <SearchInput
        initialItem={currentSymbol ? currentSymbol : null}
        items={symbols}
        maxItems={8}
        onChange={handleChange}
        onTextChange={onTextChange}
        placeholder={placeholderTest[market.toLowerCase()]}
      />
    )
  }

  return (
    <AppQuery<SimpleSearchQuery, searchVariables>
      query={SimpleSearchConnection}
      variables={{ text: currentText.toUpperCase(), marketSegment: MarketSegment.STOCK }}
    >
      {(stockSearch: SimpleSearchQuery) => {
        return (
          <AppQuery<SimpleSearchQuery, searchVariables>
            query={SimpleSearchConnection}
            variables={{ text: currentText.toUpperCase(), marketSegment: MarketSegment.CURRENCY }}
            renderNoData={() => onSearchInputResults(stockSearch)}
          >
            {(fxSearch: SimpleSearchQuery) => onSearchInputResults(stockSearch, fxSearch)}
          </AppQuery>
        )
      }}
    </AppQuery>
  )
}

export default withRouter(ApolloSearchContainer)
