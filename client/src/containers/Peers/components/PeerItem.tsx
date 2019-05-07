import React from 'react'
import { Link } from '../../../common/StyledComponents'

interface IPeerData {
  symbol: string
}

const PeerItem: React.FunctionComponent<IPeerData> = props => (
  <Link key={props.symbol} href={`/stock/${props.symbol}`}>
    {props.symbol}
  </Link>
)

export default PeerItem
