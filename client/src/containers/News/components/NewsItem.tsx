import moment from 'moment/moment'
import React from 'react'
import { Box } from 'rebass'
import { Caption, HyperLinkedLead } from '../../../styleguide'

export interface INewsItem {
  id: string
  headline: string
  url: string
  datetime: string
  source: string
}

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

export default NewsItem
