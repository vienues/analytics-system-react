// <reference> queryml.d.ts
import React from 'react'
import { ChildProps, graphql } from 'react-apollo'
import { Box, Flex } from 'rebass'
import { compose } from 'recompose'
import { loadable } from '../common'
import COMPANY_QUERY from '../graphql/CompanyConnection.graphql'
import { AnalyticsStyle, Header, Title } from '../rt-theme/analyticsStyle'
import { HyperLinkedBlockLink } from '../styleguide'

export interface IProps {
  data: {
    stock: {
      company: any
      peers: any
    }
  }
}

class Peers extends React.Component<ChildProps<IProps, Response>, {}> {
  constructor(props: ChildProps<IProps, Response>) {
    super(props)
  }

  public render() {
    const { peers } = this.props.data.stock

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

export default compose(
  graphql(COMPANY_QUERY, {
    options: ({ id }: any) => ({
      variables: { id },
    }),
  }),
  loadable,
  // @ts-ignore
)(Peers)
