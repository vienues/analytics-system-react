import React from 'react'
import { AnalyticsStyle, Header, Title } from '../../../rt-theme/analyticsStyle'
import { default as NewsItem, INewsItem } from './NewsItem'

export interface IProps {
  news: INewsItem[]
}

const News: React.FunctionComponent<IProps> = props => (
  <AnalyticsStyle style={{ height: 'initial', marginBottom: '10px' }}>
    <Header>
      <Title>Latest News</Title>
    </Header>
    {(props.news || []).map(newsItem => (
      <NewsItem key={newsItem.id} {...newsItem} />
    ))}
  </AnalyticsStyle>
)

export default News
