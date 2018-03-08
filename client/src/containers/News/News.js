import * as moment from 'moment/moment'
import React from 'react'
import { Box, Measure } from 'rebass'
import { Text, HyperLinkedLead } from 'styleguide'
import gql from 'graphql-tag'
import { withTheme } from 'styled-components'

const News = ({ data, theme }) => {
  return (data.stock.news || []).map(newsItem => (
    <Box key={newsItem.id} is="a" target="_blank" href={newsItem.url}>
      <Measure my={1}>
        <HyperLinkedLead f={1}>{newsItem.headline}</HyperLinkedLead>
        <Text f={0} color={theme.colors.offwhite50}>
          {moment(newsItem.datetime).fromNow()} - {newsItem.source}
        </Text>
      </Measure>
    </Box>
  ))
}

News.fragment = gql`
  fragment News on Stock {
    news(last: 3) {
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

export default withTheme(News)
