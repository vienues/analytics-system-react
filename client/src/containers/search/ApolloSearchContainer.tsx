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
import { SearchInput } from './components'
import SearchConnection from './graphql/SearchConnection.graphql'
import SimpleSearchConnection from './graphql/SimpleSearchConnection.graphql'
import { SearchContext, SearchContextActionTypes } from './SearchContext'
import { SearchErrorCard } from './SearchErrorCard'
import AdaptiveLoader from '../../common/AdaptiveLoader'
import { getStockContext } from 'openfin/util'
import { ContainerService } from 'platformService/ContainerService'
import { Context } from 'openfin-fdc3'

interface IProps extends IApolloContainerProps {
  url?: string
  market: MarketSegment
}

type Props = RouteComponentProps & IProps

const ApolloSearchContainer: React.FunctionComponent<Props> = ({ id, history, url, market }: Props) => {
  const [currentText, setCurrentText] = useState<string>('')

  useEffect(() => {
    let didCancel = false

    const contextListener = ContainerService.addContextListener((context: Context) => {
      if (!didCancel && context.type === 'fdc3.instrument' && context.id) {
        const defaultMarketSegment = 'fx'
        const ccyPair = context.id.ticker?.slice(0, 3) + '/' + context.id.ticker?.slice(3)
        const marketSegment = context.marketSegment || defaultMarketSegment
        history.push(`/${marketSegment}/${ccyPair}`)
      }
    })

    return () => {
      didCancel = true
      contextListener.then(_listener => _listener?.unsubscribe())
    }
  }, [history])

  const { currentSymbol, refetchAttempts, searching, dispatch } = useContext(SearchContext)

  const placeholderTest = 'Enter a stock, symbol, or currency pair...'

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
        ContainerService.navigateToStock(symbol.id)
        ContainerService.broadcast(getStockContext(symbol))
      } else {
        history.push(`/${url}`)
      }
    },
    [dispatch, history, url],
  )

  useEffect(() => {
    if (dispatch) {
      if (id) {
        dispatch({ type: SearchContextActionTypes.FindSymbol })
      } else {
        dispatch({ type: SearchContextActionTypes.ClearedSymbol })
      }
    }
  }, [dispatch, id])

  useEffect(() => {
    let refetchTimeout: number = 0
    if (searching && dispatch && id) {
      let foundSymbol: search_symbols | undefined
      apolloClient
        .query<searchQuery, searchQueryVariables>({
          errorPolicy: 'all',
          query: SearchConnection,
          variables: { id: id.toUpperCase(), market: market.toUpperCase() },
        })
        .then((result: any) => {
          if (result.data && result.data.symbol) {
            foundSymbol = {
              id: result.data.symbol.id,
              name: result.data.symbol.name,
            } as search_symbols
            if (foundSymbol.id === id.toUpperCase()) {
              dispatch({
                type: SearchContextActionTypes.FoundSymbol,
                payload: { currentSymbol: foundSymbol },
              })
              return Promise.resolve()
            } else {
              throw new Error('Returned symbol does not match requested symbol.')
            }
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
          console.error(ex)
          dispatch({
            type: SearchContextActionTypes.UnrecognizedSymbol,
            payload: {
              errorMessage: (
                <SearchErrorCard id={id} market={market} foundSymbol={foundSymbol} onClick={handleChange} />
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
  }, [dispatch, history, id, market, refetchAttempts, searching, url, handleChange])

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
    const fxSymbols = fxSearch ? fxSearch.symbols.map(s => ({ ...s, marketSegment: MarketSegment.FX })) : []
    const symbols = stockSymbols
      .concat(fxSymbols)
      .sort((a, b) => {
        switch (true) {
          case a.id === currentText.toUpperCase():
            return -1
          case b.id === currentText.toUpperCase():
            return 1
          case a.id < b.id:
            return -1
          default:
            return 1
        }
      })
      .slice(0, 9)

    return (
      <SearchInput
        initialItem={currentSymbol ? currentSymbol : null}
        items={symbols}
        maxItems={8}
        onChange={handleChange}
        onTextChange={onTextChange}
        placeholder={placeholderTest}
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
            variables={{ text: currentText.toUpperCase(), marketSegment: MarketSegment.FX }}
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
