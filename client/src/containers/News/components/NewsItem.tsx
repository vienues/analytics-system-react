import moment from 'moment/moment'
import React from 'react'
import { NewsQuery_news } from '../../../__generated__/types'
import { Caption, Link, Text } from '../../../common/StyledComponents'

const NewsItem: React.FunctionComponent<NewsQuery_news> = ({ id, url, headline, datetime, source }) => (
  <Link key={id} target="_blank" href={url}>
    <Text>{headline}</Text>
    <Caption>
      {moment(datetime).fromNow()} - {source}
    </Caption>
  </Link>
)

export default NewsItem
