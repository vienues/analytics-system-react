import React from 'react'
import { DataCard, Heading, Text, VerticalDataContents } from '../../../common/StyledComponents'
import { default as Peer } from './PeerItem'

interface IPeersProps {
  peers: string[]
}

const Peers: React.FunctionComponent<IPeersProps> = props => (
  <DataCard>
    <Heading>Top Peers</Heading>
    <VerticalDataContents>
      {props.peers.length > 0 ? props.peers.map(peer => <Peer key={peer} symbol={peer} />) : <Text>No peers</Text>}
    </VerticalDataContents>
  </DataCard>
)

export default Peers
