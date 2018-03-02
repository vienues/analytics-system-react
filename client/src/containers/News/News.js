import * as moment from 'moment/moment'
import React from 'react'
import { Box, Measure } from 'rebass'
import { Text, HyperLinkedLead } from '../../styleguide'
import gql from 'graphql-tag'

const NewsSidebar = props => {
  return (props.data.stock.news || []).map(newsItem => (
    <Box key={newsItem.id} is="a" target="_blank" href={newsItem.url} flex={1}>
      <Measure f={1} my={2}>
        <HyperLinkedLead f={1}>
          {newsItem.headline}
        </HyperLinkedLead>
        <Text f={0} color="offwhite50">
          {moment(newsItem.datetime).fromNow()} - {newsItem.source}
        </Text>
      </Measure>
    </Box>
  ))
}

NewsSidebar.fragment = gql`
  fragment News on Stock {
    news(last: 5) {
      id
      datetime
      headline
      source
      url
      summary
      related
    }
  }
`

export default NewsSidebar
