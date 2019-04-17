import moment from 'moment/moment'
import React from 'react'
import { Box } from 'rebass'
import { Text, HyperLinkedLead } from '../../styleguide'
import gql from 'graphql-tag'
import { withTheme } from 'styled-components'

import { ChildProps } from 'react-apollo'

export interface IProps {
  data: any
  theme: any
}

export const NEWS_QUERY = gql`
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
export class News extends React.Component<ChildProps<IProps, Response>, {}> {
  constructor(props: ChildProps<IProps, Response>) {
    super(props)
  }

  public render() {
    return (this.props.data.stock.news || []).map((newsItem: any) => (
      <Box key={newsItem.id} is="a" target="_blank" href={newsItem.url}>
        <div>
          <HyperLinkedLead f={1}>{newsItem.headline}</HyperLinkedLead>
          <Text color={this.props.theme.colors.offwhite50}>
            {moment(newsItem.datetime).fromNow()} - {newsItem.source}
          </Text>
        </div>
      </Box>
    ))
  }
}

export default withTheme(News)
