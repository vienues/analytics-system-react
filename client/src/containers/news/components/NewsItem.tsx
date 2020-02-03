import moment from 'moment/moment'
import React from 'react'
import { Link } from '../../../common/StyledComponents'
// import { Caption, Link, Text } from '../../../common/StyledComponents'
import { styled } from '../../../rt-theme'

export interface INewsArticle {
  id: string
  datetime: string
  headline: string
  source: string
  url: string
}

const NewsItem: React.FunctionComponent<INewsArticle> = ({ id, url, headline, datetime, source }) => (
  <>
    <Link style={{ cursor: 'pointer' }} target="_blank" href={url}>
      <div style={{ marginBottom: '1rem' }}>{headline}</div>
      <NewsCaption>
        {moment(datetime).fromNow()} - {source}
      </NewsCaption>
    </Link>
    {/* <Link key={id} target="_blank" href={url}>
    <Text style={{marginBottom: '2rem'}}>{headline}</Text>
    <Caption>
      {moment(datetime).fromNow()} - {source}
    </Caption>
  </Link> */}
  </>
)

export const NewsCaption = styled.span`
  color: ${({ theme, color }) => theme.colors[color || 'white']};
  opacity: 0.59;
  display: block;
  line-height: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  font-size: 0.75rem;
`

export default NewsItem
