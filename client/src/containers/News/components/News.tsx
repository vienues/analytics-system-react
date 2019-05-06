import React from 'react'
import { DataCard, Header, Title } from '../../../common/StyledComponents'
import { default as NewsItem, INewsItem } from './NewsItem'

export interface IProps {
  news: INewsItem[]
}

const News: React.FunctionComponent<IProps> = props => (
  <DataCard style={{ height: 'initial', marginBottom: '10px' }}>
    <Header>
      <Title>Latest News</Title>
    </Header>
    {(props.news || []).map(newsItem => (
      <NewsItem key={newsItem.id} {...newsItem} />
    ))}
  </DataCard>
)

export default News
