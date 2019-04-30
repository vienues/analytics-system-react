import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Box, Flex } from 'rebass'
import Numeral from '../../../components/Numeral'
import { colors } from '../../../rt-theme'
import { Large, VerticalSeperator } from '../../../styleguide'

export interface IStockPriceData {
  change: number
  changePercent: number
  latestPrice: number
}

interface IStockPriceProps {
  stockPrice: IStockPriceData
}

const StockPrice: React.FunctionComponent<IStockPriceProps> = props => {
  const { change, changePercent, latestPrice } = props.stockPrice
  const [Icon, color] =
    (change || 0) < 0 ? [faArrowDown, colors.accents.bad.base] : [faArrowUp, colors.accents.good.base]

  const fixedFormat = (e: number) => {
    return e < 100 ? e.toFixed(2) : e.toFixed(0)
  }

  return (
    <Flex>
      <Large>$ {latestPrice}</Large>
      <Box px={1} />
      <Large style={{ color }}>
        <FontAwesomeIcon icon={Icon} />
        <Numeral>{fixedFormat(change)}</Numeral>
      </Large>
      <VerticalSeperator />
      <Large style={{ color, paddingLeft: '0.5rem' }}>
        {' '}
        <Numeral>{fixedFormat(changePercent * 100)}%</Numeral>
      </Large>
    </Flex>
  )
}

export default StockPrice
