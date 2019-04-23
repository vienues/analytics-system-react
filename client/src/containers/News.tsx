// <reference> queryml.d.ts
import moment from 'moment/moment'
import React from 'react'
import { ChildProps } from 'react-apollo'
import { Box } from 'rebass'
import { withTheme } from 'styled-components'
import { NewsQuery, NewsQueryVariables } from '../__generated__/types'
import { AppQuery } from '../common/AppQuery'
import NewsConnection from '../graphql/NewsConnection.graphql'
import { AnalyticsStyle, Header, Title } from '../rt-theme/analyticsStyle'
import { Caption, HyperLinkedLead } from '../styleguide'

export interface IProps {
  theme: any
  id: string
}

const News: React.FunctionComponent<ChildProps<IProps, Response>> = (props: ChildProps<IProps, Response>) => {
  return (
    <AppQuery<NewsQuery, NewsQueryVariables> query={NewsConnection} variables={{ id: props.id }}>
      {(data, _) => {
        const { stock } = data
        if (stock) {
          return (
            <AnalyticsStyle style={{ height: 'initial', marginBottom: '10px' }}>
              <Header>
                <Title>Latest News</Title>
              </Header>
              {(stock.news || []).map((newsItem: any) => (
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
        } else {
          return <></>
        }
      }}
    </AppQuery>
  )
}

export default withTheme(News)
