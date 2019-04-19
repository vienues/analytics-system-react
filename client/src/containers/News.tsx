// <reference> queryml.d.ts
import moment from 'moment/moment'
import React from 'react'
import { ChildProps, graphql } from 'react-apollo'
import { Box } from 'rebass'
import { compose } from 'recompose'
import { withTheme } from 'styled-components'
import { NewsQuery, NewsQueryVariables } from '../__generated__/types'
import { loadable } from '../common'
import NewsConnection from '../graphql/NewsConnection.graphql'
import { AnalyticsStyle, Header, Title } from '../rt-theme/analyticsStyle'
import { Caption, HyperLinkedLead } from '../styleguide'

export interface IProps {
  theme: any
}
export interface IDataProps {
  data: NewsQuery
}

type Props = IProps & IDataProps

const News: React.FunctionComponent<ChildProps<Props, Response>> = (props: ChildProps<Props, Response>) => {
  return (
    <AnalyticsStyle style={{ height: 'initial', marginBottom: '10px' }}>
      <Header>
        <Title>Latest News</Title>
      </Header>
      {props.data.stock ? (
        (props.data.stock.news || []).map((newsItem: any) => (
          <Box key={newsItem.id} is="a" target="_blank" href={newsItem.url}>
            <div style={{ marginBottom: '20px' }}>
              <HyperLinkedLead f={1}>{newsItem.headline}</HyperLinkedLead>
              <Caption>
                {moment(newsItem.datetime).fromNow()} - {newsItem.source}
              </Caption>
            </div>
          </Box>
        ))
      ) : (
        <></>
      )}
    </AnalyticsStyle>
  )
}

const withNewsData = graphql<Response, NewsQueryVariables>(NewsConnection, {
  options: ({ id }: any) => ({
    variables: { id },
  }),
})

export default compose(
  withNewsData,
  loadable,
  // @ts-ignore
)(withTheme(News))
