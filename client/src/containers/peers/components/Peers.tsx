import React from 'react'
import styled from 'styled-components'
import { DataCard, DataContents, Text } from '../../../common/StyledComponents'
import { default as Peer } from './PeerItem'

const Peers: React.FunctionComponent<{ peers: string[] }> = ({ peers }) => (
  <DataCard cardType="peers" title="Top Peers">
    <PeersWrapper>
      {peers.length > 0 ? peers.map(peer => <Peer key={peer} symbol={peer} />) : <Text>No peers</Text>}
    </PeersWrapper>
  </DataCard>
)

const PeersWrapper = styled(DataContents)`
  grid-template-columns: repeat(auto-fit, minmax(3.5rem, 1fr));
  justify-items: start;
`

export default Peers
