import moment from 'moment/moment'
import React from 'react'
import { Box } from 'rebass'
import { AnalyticsStyle, Header, Title } from '../rt-theme/analyticsStyle'
import { Caption, HyperLinkedLead } from '../styleguide'

export interface INewsItem {
  id: string
  headline: string
  url: string
  datetime: string
  source: string
}

export interface IProps {
  news: INewsItem[]
}

const News: React.FunctionComponent<IProps> = (props: IProps) => {
  const NewsItem: React.FunctionComponent<INewsItem> = (newsItemProps: INewsItem) => (
    <Box key={newsItemProps.id} is="a" target="_blank" href={newsItemProps.url}>
      <div style={{ marginBottom: '20px' }}>
        <HyperLinkedLead f={1}>{newsItemProps.headline}</HyperLinkedLead>
        <Caption>
          {moment(newsItemProps.datetime).fromNow()} - {newsItemProps.source}
        </Caption>
      </div>
    </Box>
  )
  return (
    <AnalyticsStyle style={{ height: 'initial', marginBottom: '10px' }}>
      <Header>
        <Title>Latest News</Title>
      </Header>
      {(props.news || []).map((newsItem: INewsItem) => (
        <NewsItem key={newsItem.id} {...newsItem} />
      ))}
    </AnalyticsStyle>
  )
}

export default News
