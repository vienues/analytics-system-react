import React from 'react'
import { AnalyticsStyle, Header, Title } from '../../../rt-theme/analyticsStyle'
import { default as Peer } from './PeerItem'

interface IPeersProps {
  peers: string[]
}

const Peers: React.FunctionComponent<IPeersProps> = props => {
  return (
    <AnalyticsStyle style={{ height: 'initial', marginBottom: '10px' }}>
      <Header>
        <Title>Top Peers</Title>
      </Header>
      <div
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          justifyContent: 'start',
          gridGap: '0.25rem',
          fontSize: '0.5rem',
        }}
        color="offwhite50"
      >
        {props.peers.map(peer => (
          <Peer key={peer} symbol={peer} />
        ))}
      </div>
    </AnalyticsStyle>
  )
}

export default Peers
