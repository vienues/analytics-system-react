import moment from 'moment/moment'
import React from 'react'
import { Caption, HyperLinkedLead } from '../../../common/StyledComponents'

export interface INewsItem {
  id: string
  headline: string
  url: string
  datetime: string
  source: string
}

const NewsItem: React.FunctionComponent<INewsItem> = (newsItemProps: INewsItem) => (
  <a key={newsItemProps.id} is="a" target="_blank" href={newsItemProps.url}>
    <div style={{ marginBottom: '20px' }}>
      <HyperLinkedLead>{newsItemProps.headline}</HyperLinkedLead>
      <Caption>
        {moment(newsItemProps.datetime).fromNow()} - {newsItemProps.source}
      </Caption>
    </div>
  </a>
)

export default NewsItem
