import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Text, VerticalDataContents } from '../../../common/StyledComponents'
import { colors } from '../../../rt-theme'

export interface IStockPriceData {
  change: number
  changePercent: number
  latestPrice: number
}

interface IStockPriceProps {
  symbol?: string
  fontSize?: number
  stockPrice: IStockPriceData
}

const StockPrice: React.FunctionComponent<IStockPriceProps> = props => {
  const { change, changePercent, latestPrice } = props.stockPrice
  const [Icon, color] =
    (change || 0) < 0 ? [faCaretDown, colors.accents.bad.base] : [faCaretUp, colors.accents.good.base]

  const fixedFormat = (e: number) => {
    return e < 100 ? e.toFixed(2) : e.toFixed(0)
  }

  return (
    <VerticalDataContents
      style={{ fontSize: `${props.fontSize}rem`, lineHeight: `${props.fontSize}rem`, gridGap: '0.5rem' }}
    >
      <div>{props.symbol}</div>
      <div>${latestPrice.toFixed(2)}</div>
      <div style={{ display: 'grid', gridGap: '0.25em', gridAutoFlow: 'column', color, marginLeft: '0.5rem' }}>
        <FontAwesomeIcon icon={Icon} />
        <Text>{fixedFormat(change)}</Text>
        <Text>|</Text>
        <Text>{fixedFormat(changePercent * 100)}%</Text>
      </div>
    </VerticalDataContents>
  )
}

export default StockPrice
