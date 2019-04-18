import moment from 'moment/moment'
import React from 'react'
import { Box } from 'rebass'
import { Text, HyperLinkedLead } from '../styleguide'
import { withTheme } from 'styled-components'

import { ChildProps, graphql } from 'react-apollo'
import { loadable } from '../common'
import { compose } from 'recompose'

const NEWS_QUERY = require('../graphql/NewsConnection.graphql')

export interface IProps {
  data: any
  theme: any
}

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

export default compose(
  graphql(NEWS_QUERY, {
    options: ({ id }: any) => ({
      variables: { id },
    }),
    // @ts-ignore
  }),
  loadable,
)(withTheme(News))
