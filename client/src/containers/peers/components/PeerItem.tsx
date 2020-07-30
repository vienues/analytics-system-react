import React, { MouseEventHandler } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { PeersLink } from './Peers.styles'

type PeerItemProps = RouteComponentProps & {
  symbol: string
}

const PeerItem: React.FunctionComponent<PeerItemProps> = ({ symbol, history }) => {
  const navClickHandler: MouseEventHandler<HTMLAnchorElement> = async (event) => {
    const newSymbol = event.currentTarget.dataset.symbol

    history.push(`/stock/${newSymbol}`)
  }

  return (
    <PeersLink onClick={navClickHandler} data-symbol={symbol} key={symbol}>
      {symbol}
    </PeersLink>
  )
}

export default withRouter(PeerItem)
