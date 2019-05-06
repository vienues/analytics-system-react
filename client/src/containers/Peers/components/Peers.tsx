import React from 'react'
import { DataCard, Header, Title } from '../../../common/StyledComponents'
import { default as Peer } from './PeerItem'

interface IPeersProps {
  peers: string[]
}

const Peers: React.FunctionComponent<IPeersProps> = props => {
  return (
    <DataCard>
      <Header>
        <Title>Top Peers</Title>
      </Header>
      <div
        style={{
          display: 'grid',
          fontSize: '0.5rem',
          gridAutoFlow: 'column',
          gridGap: '0.25rem',
          justifyContent: 'start',
        }}
        color="offwhite50"
      >
        {props.peers.map(peer => (
          <Peer key={peer} symbol={peer} />
        ))}
      </div>
    </DataCard>
  )
}

export default Peers
