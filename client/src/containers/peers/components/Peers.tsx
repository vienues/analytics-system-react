import React from 'react'
import { DataCard, Text } from '../../../common/StyledComponents'
import { default as Peer } from './PeerItem'
import { PeersWrapper } from './Peers.styles'
import styled from 'styled-components/macro'
import { SidebarDataCard } from 'common/DataCard'

const Peers: React.FunctionComponent<{ peers: string[]; id: string }> = ({ peers, id }) => (
  <PeersDataCard>
    <DataCard cardType="peers" title="Top Peers" instrument={id}>
      <PeersWrapper>
        {peers.length > 0 ? peers.map(peer => <Peer key={peer} symbol={peer} />) : <Text>No peers</Text>}
      </PeersWrapper>
    </DataCard>
  </PeersDataCard>
)

const PeersDataCard = styled(SidebarDataCard)`
  border-top: ${({ theme }) => `1px solid ${theme.secondary.coreSecondary4}`};
`

export default Peers
