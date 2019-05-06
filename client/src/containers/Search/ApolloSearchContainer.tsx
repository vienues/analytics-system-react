import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { withRouter } from 'react-router-dom'
import { search, search_search, searchQuery, searchQueryVariables, searchVariables } from '../../__generated__/types'
import apolloClient from '../../apollo/client'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import SearchConnection from '../../graphql/SearchConnection.graphql'
import SimpleSearchConnection from '../../graphql/SimpleSearchConnection.graphql'
import { SearchInput } from './components'

export interface IProps extends IApolloContainerProps {
  url?: RegExp
}

type Props = RouteComponentProps & IProps

export const ApolloSeachContainer: React.FunctionComponent<Props> = (props: Props) => {
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
                id: result.data.stock.id,
                name: result.data.stock.company.id,
              } as search_search)
            }
          })
      }
    }
  }, [props.id])

  const onSymbolChanged = (id: string) => {
    props.history.push(`${props.url}${id}`)
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
          <SearchInput
            initialItem={currentSymbol ? currentSymbol : null}
            items={data.search}
            onChange={handleChange}
            onTextChange={onTextChange}
          />
        )
      }}
    </AppQuery>
  )
}

export default withRouter(ApolloSeachContainer)
