import { MarketStatusIcon } from 'assets/icons'
import React from 'react'
import { Text } from '../../../common/StyledComponents'
import { StockPriceChangeWrapper, StockPriceWrapper, SymbolText } from './StockPrice.styles'

export interface IStockPriceData {
  change: number | null
  changePercent: number | null
  latestPrice: number | null
}

interface IStockPriceProps {
  symbol?: string
  fontSize?: number
  stockPrice: IStockPriceData | null
  hideChange?: Boolean
}

const StockPrice: React.FunctionComponent<IStockPriceProps> = ({ symbol, fontSize, stockPrice, hideChange }) => {
  if (stockPrice === null) {
    return <div>N/A</div>
  }
  const { change, changePercent, latestPrice } = stockPrice

  const fixedFormat = (e: number | null, isPercentage?: Boolean) => {
    if (e === null) {
      return '-'
    }
    let decimalPlaces = 0
    if (isPercentage) {
      decimalPlaces = e < 1 ? 2 : 0
    } else if (e.toString().indexOf('.') >= 0) {
      decimalPlaces = e.toString().split('.')[1].length || 2
    }
    return (isPercentage ? e * 100 : e).toFixed(decimalPlaces > 4 ? 4 : decimalPlaces)
  }

  return (
    <StockPriceWrapper size={fontSize}>
      <SymbolText>{symbol}</SymbolText>
      <Text>${fixedFormat(latestPrice)}</Text>
      <StockPriceChangeWrapper isHidden={hideChange} change={change ?? 0}>
        <MarketStatusIcon change={change ?? 0} />
        <Text>{fixedFormat(change)}</Text>
        <Text>|</Text>
        <Text>{fixedFormat(changePercent, true)}%</Text>
      </StockPriceChangeWrapper>
    </StockPriceWrapper>
  )
}

export default StockPrice
