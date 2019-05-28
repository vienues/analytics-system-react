import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Text, VerticalDataContents } from '../../../common/StyledComponents'
import { colors, styled } from '../../../rt-theme'

export interface IStockPriceData {
  change: number | null
  changePercent: number | null
  latestPrice: number | null
}

interface IStockPriceProps {
  symbol?: string
  fontSize?: number
  stockPrice: IStockPriceData | null
}

const StockPrice: React.FunctionComponent<IStockPriceProps> = ({ symbol, fontSize, stockPrice }) => {
  if (stockPrice === null) {
    return <div>N/A</div>
  }
  const { change, changePercent, latestPrice } = stockPrice
  const [Icon, color] =
    (change || 0) < 0 ? [faCaretDown, colors.accents.bad.base] : [faCaretUp, colors.accents.good.base]

  const fixedFormat = (e: number | null) => {
    if (e === null) {
      return 'N/A'
    }
    return e < 100 ? e.toFixed(2) : e.toFixed(0)
  }

  return (
    <StockPriceWrapper size={fontSize}>
      <Text>{symbol}</Text>
      <Text>${latestPrice !== null ? latestPrice.toFixed(2) : `N/A`}</Text>
      <StockPriceChangeWrapper fontColor={color}>
        <FontAwesomeIcon icon={Icon} />
        <Text>{fixedFormat(change)}</Text>
        <Text>|</Text>
        <Text>{changePercent !== null ? fixedFormat(changePercent * 100) : `N/A`}%</Text>
      </StockPriceChangeWrapper>
    </StockPriceWrapper>
  )
}
interface IStockPriceWrapperAttrs {
  size?: number
}

const StockPriceWrapper = styled(VerticalDataContents)<IStockPriceWrapperAttrs>`
  font-size: ${({ size }) => `${size}rem` || `inherit`};
  line-height: ${({ size }) => `${size}rem` || `inherit`};
  grid-gap: 0.5rem;
`

interface IStockPriceChangeWrapperAttrs {
  fontColor: string
}

const StockPriceChangeWrapper = styled.div<IStockPriceChangeWrapperAttrs>`
  display: grid;
  grid-gap: 0.25em;
  grid-auto-flow: column;
  margin-left: 0.5rem;
  color: ${({ fontColor }) => fontColor};
`

export default StockPrice
