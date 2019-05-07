import React from 'react'
import { ChildProps } from 'react-apollo'
import { NewsQuery, NewsQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { News } from './components'
import NewsConnection from './graphql/NewsConnection.graphql'

const ApolloNewsContainer: React.FunctionComponent<ChildProps<IApolloContainerProps, Response>> = ({ id }) => {
  const onNewsQueryResults: (data: NewsQuery) => JSX.Element = ({ news }): JSX.Element => {
    return <News news={news} />
  }

  return (
    <AppQuery<NewsQuery, NewsQueryVariables> query={NewsConnection} variables={{ id }}>
      {onNewsQueryResults}
    </AppQuery>
  )
}

export default ApolloNewsContainer
