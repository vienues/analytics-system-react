import React from 'react'
import styled from 'styled-components'
import { Text } from '../../styleguide/index'

const News = props => {
  if (props.data.loading) {
    return <Text>loading</Text>
  }

  if (props.data.error) {
    console.log(props.data.error)
    return <Text>error</Text>
  }

  return (props.data.stock.news || []).map(newsItem => (
    <NewsItem key={newsItem.id}>
      <Text>{newsItem.headline}</Text>
      <Text>{newsItem.source}</Text>
    </NewsItem>
  ))
}

const NewsItem = styled.View`
  width: 100%;
  flex-flow: row wrap;
  margin-top: 16px;
`

export default News
