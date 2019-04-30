import React from 'react'
import { Box, Flex } from 'rebass'
import { AnalyticsStyle, Header, Title } from '../../../rt-theme/analyticsStyle'

import { default as Peer } from './PeerItem'

interface IPeersProps {
  peers: string[]
}

const Peers: React.FunctionComponent<IPeersProps> = props => {
  return (
    <Box flex={1}>
      <AnalyticsStyle style={{ height: 'initial', marginBottom: '10px' }}>
        <Header>
          <Title>Top Peers</Title>
        </Header>
        <Flex mt={1} color="offwhite50">
          {props.peers.map(peer => (
            <Peer key={peer} symbol={peer} />
          ))}
        </Flex>
      </AnalyticsStyle>
    </Box>
  )
}

export default Peers
