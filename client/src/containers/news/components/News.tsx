import React from 'react'
import { DataCard, Text } from '../../../common/StyledComponents'
import { default as NewsItem, INewsArticle } from './NewsItem'
import { NewsCard } from './News.styles'

const News: React.FunctionComponent<{ news: INewsArticle[]; id: string }> = ({ news, id }) => (
  <NewsCard>
    <DataCard cardType="news" title="Latest News" instrument={id}>
      <div>
        {news.length > 0 ? (
          news.map(newsItem => <NewsItem key={newsItem.id} {...newsItem} />)
        ) : (
          <Text>There is no news</Text>
        )}
      </div>
    </DataCard>
  </NewsCard>
)

export default News
