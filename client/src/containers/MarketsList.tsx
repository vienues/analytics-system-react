import ArrowDownward from '@material-ui/icons/ArrowDownward'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import React from 'react'
import { ChildProps, Subscription } from 'react-apollo'
import { Box, Flex } from 'rebass'
import { onMarketSubscription, onMarketSubscriptionVariables, QuoteQuery } from '../__generated__/types'
import { AppQuery } from '../common/AppQuery'
import Numeral from '../components/Numeral'
import MarketSubscription from '../graphql/MarketSubscription.graphql'
import MarketsConnection from '../graphql/QuoteConnection.graphql'
import { colors } from '../rt-theme'
import { Currency, Percent, Small, Text, VerticalSeperator } from '../styleguide'

const MarketListItem: React.FunctionComponent<ChildProps<{ symbol: string }, Response>> = (
  props: ChildProps<{ symbol: string }, Response>,
) => {
  return (
    <Subscription<onMarketSubscription, onMarketSubscriptionVariables>
      subscription={MarketSubscription}
      variables={{ markets: [props.symbol] }}
      shouldResubscribe={false}
    >
      {({ data, loading }) => {
        if (loading) {
          return <></>
        }
        if (data && data.getQuotes) {
          const { id, change, changePercent, latestPrice } = data.getQuotes
          if (id !== null && latestPrice !== null && change !== null && changePercent !== null) {
            const [Icon, color] =
              change < 0 ? [ArrowDownward, colors.accents.bad.base] : [ArrowUpward, colors.accents.good.base]
            return (
              <Flex key={id} style={{ marginRight: '1rem' }}>
                <Small caps={true} bold={true}>
                  {id}
                </Small>
                <Box pr={1} />
                <Currency>{latestPrice.toFixed(2)}</Currency>
                <Box pr={1} />
                <Text color={color}>
                  <Icon
                    viewBox="0 0 20 20"
                    style={{ verticalAlign: 'super', fontSize: '0.5rem', marginRight: '0.25rem' }}
                  />
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
        }
        return <></>
      }}
    </Subscription>
  )
}

const MarketList: React.FunctionComponent<ChildProps<{}, Response>> = () => (
  <AppQuery<QuoteQuery, {}> query={MarketsConnection}>
    {(data, __) => {
      return (
        <Flex>
          {data.markets.map(market => (
            <MarketListItem key={market.id || ''} symbol={market.id || ''} />
          ))}
        </Flex>
      )
    }}
  </AppQuery>
)

export default MarketList
