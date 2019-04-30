import React from 'react'
import { HyperLinkedBlockLink } from '../../../styleguide'

interface IPeerData {
  symbol: string
}

const PeerItem: React.FunctionComponent<IPeerData> = props => (
  <HyperLinkedBlockLink key={props.symbol} href={`/stock/${props.symbol}`} pr={1}>
    {props.symbol}
  </HyperLinkedBlockLink>
)

export default PeerItem
