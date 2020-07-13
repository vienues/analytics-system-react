import { ContainerService } from 'platformService/ContainerService'
import React, { MouseEventHandler } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { PeersLink } from './Peers.styles'

type PeerItemProps = RouteComponentProps & {
  symbol: string
}

const PeerItem: React.FunctionComponent<PeerItemProps> = ({ symbol, history }) => {
  const navClickHandler: MouseEventHandler<HTMLAnchorElement> = async (event) => {
    const newSymbol = event.currentTarget.dataset.symbol
    if (ContainerService.agent === 'desktop' && newSymbol) {
      const { win, app } = ContainerService.state
      if (!win || !app) {
        // This has been clicked whilst the OpenfinService#loadOpenfin is running.
        // TODO: What should we do in this case?
        return
      }

      // we are in an desktop app, let's see if we are in a child window
      if (win.identity.name === app.identity.uuid) {
        // parent window
        history.push(`/stock/${newSymbol}`)
        ContainerService.navigateToStock(newSymbol)
        return
      }

      // child window, tell parent to navigate
      ContainerService.navigateParent(newSymbol)
      return
    }

    history.push(`/stock/${newSymbol}`)
  }

  return (
    <PeersLink onClick={navClickHandler} data-symbol={symbol} key={symbol}>
      {symbol}
    </PeersLink>
  )
}

export default withRouter(PeerItem)
