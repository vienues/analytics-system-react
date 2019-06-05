import React from 'react'
import { DataCard, DataContents, Heading, Text } from '../../../common/StyledComponents'
import { default as NewsItem, INewsArticle } from './NewsItem'

const News: React.FunctionComponent<{ news: INewsArticle[] }> = ({ news }) => (
  <DataCard>
    <Heading>Latest News</Heading>
    <DataContents>
      {news.length > 0 ? (
        news.map(newsItem => <NewsItem key={newsItem.id} {...newsItem} />)
      ) : (
        <Text>There is no news</Text>
      )}
    </DataContents>
  </DataCard>
)

export default News
