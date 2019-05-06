import React from 'react'

interface IPeerData {
  symbol: string
}

const PeerItem: React.FunctionComponent<IPeerData> = props => (
  <a key={props.symbol} href={`/stock/${props.symbol}`}>
    {props.symbol}
  </a>
)

export default PeerItem
