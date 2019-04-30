import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Box, Flex } from 'rebass'
import Numeral from '../../../components/Numeral'
import { colors } from '../../../rt-theme'
import { Currency, Percent, Small, Text, VerticalSeperator } from '../../../styleguide'

export interface IMarketsListItemProps {
  id: string
  change: number
  changePercent: number
  latestPrice: number
}

const MarketListItem: React.FunctionComponent<IMarketsListItemProps> = props => {
  const { id, change, changePercent, latestPrice } = props
  const [Icon, color] = change < 0 ? [faArrowDown, colors.accents.bad.base] : [faArrowUp, colors.accents.good.base]

  return (
    <Flex key={id} style={{ marginRight: '1rem' }}>
      <Small caps={true} bold={true}>
        {id}
      </Small>
      <Box pr={1} />
      <Currency>{latestPrice.toFixed(2)}</Currency>
      <Box pr={1} />
      <Text color={color}>
        <FontAwesomeIcon icon={Icon} />
        <Numeral>{change.toFixed(2)}</Numeral>
      </Text>
      <VerticalSeperator />
      <Percent color={color}>
        {' '}
        <Numeral>{(changePercent * 100).toFixed(2)}</Numeral>
      </Percent>
    </Flex>
  )
}

export default MarketListItem
