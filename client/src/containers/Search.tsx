import React, { useEffect, useState } from 'react'
// import { ChildProps, graphql } from 'react-apollo'
import { RouteComponentProps } from 'react-router'
import { withRouter } from 'react-router-dom'
// import { compose, withProps } from 'recompose'
import { search, search_search, searchQuery, searchQueryVariables, searchVariables } from '../__generated__/types'
import { AppQuery } from '../common/AppQuery'
import SearchSelect from '../components/Select'
import SearchConnection from '../graphql/SearchConnection.graphql'
import SimpleSearchConnection from '../graphql/SimpleSearchConnection.graphql'

import apolloClient from '../apollo/client'

export interface IProps {
  id: string
  url: RegExp
}

type Props = RouteComponentProps & IProps

export const Search: React.FunctionComponent<Props> = (props: Props) => {
  const [initialized, setInitialized] = useState(false)
  const [currentSymbol, setCurrentSymbol] = useState<search_search | null>(null)
  const [currentText, setCurrentText] = useState<string>('')

  useEffect(() => {
    if (!initialized) {
      setInitialized(true)
      if (props.id) {
        apolloClient
          .query<searchQuery, searchQueryVariables>({
            query: SearchConnection,
            variables: { id: props.id },
          })
          .then(result => {
            if (result.data && result.data.stock && result.data.stock.company) {
              setCurrentSymbol({
                __typename: 'SearchResult',
                id: result.data.stock.company.id,
                name: result.data.stock.company.name,
              } as search_search)
            }
          })
      }
    }
  }, [props.id])

  const onSymbolChanged = (id: string) => {
    props.history.push(`${props.url}${id}`)
    if ((window as any).fin) {
      ;(window as any).fin.desktop.InterApplicationBus.publish('SYMBOL.CHANGE', {
        data: {
          selection: {
            __typename: 'Selection',
            id,
            symbol: id,
          },
        },
      })
    }
  }

  const onTextChange = (text: string) => {
    setCurrentText(text)
  }

  const handleChange = (symbol: search_search | null) => {
    setCurrentSymbol(symbol)
    if (symbol) {
      onSymbolChanged(symbol.id)
    }
  }

  return (
    <AppQuery<search, searchVariables> query={SimpleSearchConnection} variables={{ text: currentText }}>
      {(data, __) => {
        return (
          <SearchSelect
            onInputChange={onTextChange}
            options={data.search}
            onChange={handleChange}
            value={currentSymbol}
          />
        )
      }}
    </AppQuery>
  )
}

export default withRouter(Search)
