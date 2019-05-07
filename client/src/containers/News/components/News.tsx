import React from 'react'
import { NewsQuery_news } from '../../../__generated__/types'
import { DataCard, DataContents, Heading, Text } from '../../../common/StyledComponents'
import { default as NewsItem } from './NewsItem'

export interface IProps {
  news: NewsQuery_news[]
}

const News: React.FunctionComponent<IProps> = props => (
  <DataCard>
    <Heading>Latest News</Heading>
    <DataContents>
      {props.news.length > 0 ? (
        props.news.map(newsItem => <NewsItem key={newsItem.id} {...newsItem} />)
      ) : (
        <Text>There is no news</Text>
      )}
    </DataContents>
  </DataCard>
)

export default News
