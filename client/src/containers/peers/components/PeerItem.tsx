import React from 'react'
import { Link } from '../../../common/StyledComponents'

const PeerItem: React.FunctionComponent<{ symbol: string }> = ({ symbol }) => (
  <Link key={symbol} href={`/stock/${symbol}`}>
    {symbol}
  </Link>
)

export default PeerItem
