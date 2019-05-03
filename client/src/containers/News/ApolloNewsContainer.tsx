import React from 'react'
import { ChildProps } from 'react-apollo'
import { NewsQuery, NewsQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { News, NewsItem } from './components'
import NewsConnection from './graphql/NewsConnection.graphql'

const ApolloNewsContainer: React.FunctionComponent<ChildProps<IApolloContainerProps, Response>> = ({
  id,
  gridArea,
}) => {
  const onNewsQueryResults = (data: NewsQuery): JSX.Element => {
    let news = [] as NewsItem[]
    if (data.news) {
      news = data.news as NewsItem[]
    }
    return <News news={news} />
  }

  return (
    <div style={{ gridArea }}>
      <AppQuery<NewsQuery, NewsQueryVariables> query={NewsConnection} variables={{ id }}>
        {onNewsQueryResults}
      </AppQuery>
    </div>
  )
}

export default ApolloNewsContainer
