import React, { useEffect, useState } from 'react'
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
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import OpenfinService from '../../openfin/OpenfinService'
import { SearchInput } from './components'
import SearchConnection from './graphql/SearchConnection.graphql'
import SimpleSearchConnection from './graphql/SimpleSearchConnection.graphql'

interface IProps extends IApolloContainerProps {
  url?: string
  market: MarketSegment
}

type Props = RouteComponentProps & IProps

const ApolloSeachContainer: React.FunctionComponent<Props> = ({ id, history, url, market }: Props) => {
  const [currentSymbol, setCurrentSymbol] = useState<search_symbols | null>(null)
  const [currentText, setCurrentText] = useState<string>('')

  useEffect(() => {
    if (id) {
      apolloClient
        .query<searchQuery, searchQueryVariables>({
          query: SearchConnection,
          variables: { id },
        })
        .then(result => {
          if (result.data && result.data.stock && result.data.stock.company) {
            setCurrentSymbol({
              __typename: 'SearchResult',
              id: result.data.stock.id,
              name: result.data.stock.company.name,
            } as search_symbols)
          }
        })
    }
  }, [id])

  const onTextChange = (text: string) => {
    setCurrentText(text)
  }

  const handleChange = (symbol: search_symbols | null) => {
    setCurrentSymbol(symbol)
    if (symbol) {
      history.push(`/${url}/${symbol.id}`)
      OpenfinService.NavigateToStock(symbol.id)
    } else {
      history.push(``)
    }
  }

  const onSearchInputResults = ({ symbols }: SimpleSearchQuery): JSX.Element => {
    return (
      <SearchInput
        initialItem={currentSymbol ? currentSymbol : null}
        items={symbols}
        onChange={handleChange}
        onTextChange={onTextChange}
      />
    )
  }

  return (
    <AppQuery<SimpleSearchQuery, searchVariables>
      query={SimpleSearchConnection}
      variables={{ text: currentText, marketSegment: market.toUpperCase() as MarketSegment }}
    >
      {onSearchInputResults}
    </AppQuery>
  )
}

export default withRouter(ApolloSeachContainer)
