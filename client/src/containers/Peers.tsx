import React from 'react'
import { ChildProps } from 'react-apollo'
import { Box, Flex } from 'rebass'
import { CompanyQuery, CompanyQueryVariables } from '../__generated__/types'
import { AppQuery } from '../common/AppQuery'
import CompanyConnection from '../graphql/CompanyConnection.graphql'
import { AnalyticsStyle, Header, Title } from '../rt-theme/analyticsStyle'
import { HyperLinkedBlockLink } from '../styleguide'

export interface IProps {
  id: string
}

const Peers: React.FunctionComponent<ChildProps<IProps, Response>> = (props: ChildProps<IProps, Response>) => {
  return (
    <AppQuery<CompanyQuery, CompanyQueryVariables> query={CompanyConnection} variables={{ id: props.id }}>
      {(data, _) => {
        if (data.stock && data.stock.peers) {
          const { peers } = data.stock
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
        } else {
          return <></>
        }
      }}
    </AppQuery>
  )
}

export default Peers
