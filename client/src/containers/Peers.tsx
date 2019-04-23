// <reference> queryml.d.ts
import React from 'react'
import { ChildProps, graphql } from 'react-apollo'
import { Box, Flex } from 'rebass'
import { compose } from 'recompose'
import { CompanyQuery, CompanyQueryVariables } from '../__generated__/types'
import { loadable } from '../common'
import CompanyConnection from '../graphql/CompanyConnection.graphql'
import { AnalyticsStyle, Header, Title } from '../rt-theme/analyticsStyle'
import { HyperLinkedBlockLink } from '../styleguide'

export interface IProps {
  id?: string
}

export interface IDataProps {
  data?: CompanyQuery
}

type Props = IProps & IDataProps

const Peers: React.FunctionComponent<ChildProps<Props, Response>> = (props: ChildProps<Props, Response>) => {
  if (props.data && props.data.stock) {
    const { peers } = props.data.stock
    if (peers) {
      return (
        <Box flex={1}>
          <AnalyticsStyle style={{ height: 'initial', marginBottom: '10px' }}>
            <Header>
              <Title>Top Peers</Title>
            </Header>
            {peers.length > 0 && (
              <Flex mt={1} color="offwhite50">
                {peers.map((symbol: any) => (
                  <HyperLinkedBlockLink key={symbol} href={`/stock/${symbol}`} pr={1}>
                    {symbol}
                  </HyperLinkedBlockLink>
                ))}
              </Flex>
            )}
          </AnalyticsStyle>
        </Box>
      )
    }
  }
  return <></>
}

const withCustomerData = graphql<CompanyQueryVariables>(CompanyConnection, {
  options: ({ id }: CompanyQueryVariables) => ({
    variables: { id },
  }),
})

export default compose(
  withCustomerData,
  loadable,
)(Peers) as any
