import moment from 'moment/moment'
import React from 'react'
import { Caption, Link, Text } from '../../../common/StyledComponents'

export interface INewsArticle {
  id: string
  datetime: string
  headline: string
  source: string
  url: string
}

const NewsItem: React.FunctionComponent<INewsArticle> = ({ id, url, headline, datetime, source }) => (
  <Link key={id} target="_blank" href={url}>
    <Text>{headline}</Text>
    <Caption>
      {moment(datetime).fromNow()} - {source}
    </Caption>
  </Link>
)

export default NewsItem
