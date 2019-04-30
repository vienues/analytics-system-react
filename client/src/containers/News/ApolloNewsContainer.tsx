import React from 'react'
import { ChildProps } from 'react-apollo'
import { NewsQuery, NewsQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { News, NewsItem } from './components'
import NewsConnection from './graphql/NewsConnection.graphql'

interface IProps {
  id: string
}

const ApolloNewsContainer: React.FunctionComponent<ChildProps<IProps, Response>> = props => {
  const onNewsQueryResults = (data: NewsQuery): JSX.Element => {
    let news = [] as NewsItem[]
    if (data.news) {
      news = data.news as NewsItem[]
    }
    return <News news={news} />
  }

  return (
    <AppQuery<NewsQuery, NewsQueryVariables> query={NewsConnection} variables={{ id: props.id }}>
      {onNewsQueryResults}
    </AppQuery>
  )
}

export default ApolloNewsContainer
