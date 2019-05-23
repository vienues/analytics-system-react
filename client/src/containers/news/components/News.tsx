import React from 'react'
import { DataCard, DataContents, Text } from '../../../common/StyledComponents'
import { styled } from '../../../rt-theme'
import { default as NewsItem, INewsArticle } from './NewsItem'

const News: React.FunctionComponent<{ news: INewsArticle[] }> = ({ news }) => (
  <DataCard cardType="news" title="News">
    <NewsDataContents>
      {news.length > 0 ? (
        news.map(newsItem => <NewsItem key={newsItem.id} {...newsItem} />)
      ) : (
        <Text>There is no news</Text>
      )}
    </NewsDataContents>
  </DataCard>
)

const NewsDataContents = styled(DataContents)`
  & a {
    border-bottom: 1px ${({ theme }) => theme.core.textColor} solid;
  }

  & a:last-child {
    border-bottom: none;
  }
`

export default News
