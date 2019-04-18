// <reference> queryml.d.ts
import moment from 'moment/moment'
import React from 'react'
import { ChildProps, graphql } from 'react-apollo'
import { Box } from 'rebass'
import { compose } from 'recompose'
import { withTheme } from 'styled-components'
import { loadable } from '../common'
import NewsQuery from '../graphql/NewsConnection.graphql'
import { AnalyticsStyle, Header, Title } from '../rt-theme/analyticsStyle'
import { Caption, HyperLinkedLead } from '../styleguide'

export interface IProps {
  data: any
  theme: any
}

export class News extends React.Component<ChildProps<IProps, Response>, {}> {
  constructor(props: ChildProps<IProps, Response>) {
    super(props)
  }

  public render() {
    return (
      <AnalyticsStyle style={{ height: 'initial', marginBottom: '10px' }}>
        <Header>
          <Title>Latest News</Title>
        </Header>
        {(this.props.data.stock.news || []).map((newsItem: any) => (
          <Box key={newsItem.id} is="a" target="_blank" href={newsItem.url}>
            <div style={{ marginBottom: '20px' }}>
              <HyperLinkedLead f={1}>{newsItem.headline}</HyperLinkedLead>
              <Caption>
                {moment(newsItem.datetime).fromNow()} - {newsItem.source}
              </Caption>
            </div>
          </Box>
        ))}
      </AnalyticsStyle>
    )
  }
}

export default compose(
  graphql(NewsQuery, {
    options: ({ id }: any) => ({
      variables: { id },
    }),
  }),
  loadable,
  // @ts-ignore
)(withTheme(News))
