import React from 'react'
import { NewsQuery, NewsQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { News } from './components'
import NewsConnection from './graphql/NewsConnection.graphql'

const ApolloNewsContainer: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  const onNewsQueryResults = ({ news }: NewsQuery): JSX.Element => {
    return <News news={news} />
  }

  return (
    <AppQuery<NewsQuery, NewsQueryVariables> query={NewsConnection} variables={{ id }}>
      {onNewsQueryResults}
    </AppQuery>
  )
}

export default ApolloNewsContainer
