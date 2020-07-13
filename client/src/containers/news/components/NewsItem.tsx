import moment from 'moment/moment'
import React from 'react'
import { Link } from '../../../common/StyledComponents'
import { openUrlInBrowser } from 'platformService/openUrlInBrowser'
import { NewsItemContents, NewsHeadline, NewsCaption } from './NewsItem.styles'

export interface INewsArticle {
  id: string
  datetime: string
  headline: string
  source: string
  url: string
}

const NewsItem: React.FunctionComponent<INewsArticle> = ({ id, url, headline, datetime, source }) => (
  <NewsItemContents>
    <Link style={{ cursor: 'pointer' }} href={url} onClick={openUrlInBrowser}>
      <NewsHeadline>{headline}</NewsHeadline>
    </Link>
    <NewsCaption>
      {moment(datetime).fromNow()} - {source}
    </NewsCaption>
  </NewsItemContents>
)

export default NewsItem
