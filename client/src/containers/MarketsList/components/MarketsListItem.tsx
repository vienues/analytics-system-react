import React from 'react'
import { StockPrice } from '../../StockPrice/components'

export interface IMarketsListItemProps {
  id: string
  change: number
  changePercent: number
  latestPrice: number
}

const MarketListItem: React.FunctionComponent<IMarketsListItemProps> = props => {
  const { id, change, changePercent, latestPrice } = props

  return <StockPrice fontSize={0.75} stockPrice={{ change, changePercent, latestPrice }} symbol={id} />
}

export default MarketListItem
