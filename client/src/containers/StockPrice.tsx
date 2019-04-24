import ArrowDownward from '@material-ui/icons/ArrowDownward'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import React from 'react'
import { ChildProps, Subscription } from 'react-apollo'
import { Box, Flex } from 'rebass'
import { onMarketSubscription, onMarketSubscriptionVariables } from '../__generated__/types'
import Numeral from '../components/Numeral'
import MarketSubscription from '../graphql/MarketSubscription.graphql'
import { colors } from '../rt-theme'
import { Currency, Percent, Text, VerticalRuleStyled } from '../styleguide'

interface IProps {
  id: string
}

const StockPrice: React.FunctionComponent<ChildProps<IProps, Response>> = (props: ChildProps<IProps, Response>) => {
  const fixedFormat = (e: number) => {
    return e < 100 ? e.toFixed(2) : e.toFixed(0)
  }

  return (
    <Subscription<onMarketSubscription, onMarketSubscriptionVariables>
      subscription={MarketSubscription}
      variables={{ markets: [props.id] }}
    >
      {({ data, loading }) => {
        if (data && data.getQuotes) {
          const { change, changePercent, latestPrice } = data.getQuotes
          if (change !== null && changePercent !== null && latestPrice !== null) {
            const [Icon, color] =
              (change || 0) < 0 ? [ArrowDownward, colors.accents.bad.base] : [ArrowUpward, colors.accents.good.base]
            return (
              <Flex data-x={'ssss'} flex="none" color="primary30">
                <Currency>{latestPrice}</Currency>
                <Box px={1} />
                <Text color={color}>
                  <Icon
                    viewBox="0 0 20 20"
                    style={{ verticalAlign: 'super', fontSize: '1rem', marginRight: '0.25rem' }}
                  />
                  <Numeral>{fixedFormat(change)}</Numeral>
                </Text>
                <VerticalRuleStyled className="" />
                <Percent color={color}>
                  {' '}
                  <Numeral>{fixedFormat(changePercent * 100)}</Numeral>
                </Percent>
              </Flex>
            )
          }
        }
        return <></>
      }}
    </Subscription>
  )
}

export default StockPrice
