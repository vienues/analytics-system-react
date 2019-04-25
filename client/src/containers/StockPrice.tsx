import ArrowDownward from '@material-ui/icons/ArrowDownward'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import React from 'react'
import { ChildProps, Subscription } from 'react-apollo'
import { Box, Flex } from 'rebass'
import { withTheme } from 'styled-components'
import { onMarketSubscription, onMarketSubscriptionVariables } from '../__generated__/types'
import Numeral from '../components/Numeral'
import MarketSubscription from '../graphql/MarketSubscription.graphql'
import { colors } from '../rt-theme'
import { Large } from '../styleguide'

interface IProps {
  id: string
  theme: any
}

const StockPrice: React.FunctionComponent<ChildProps<IProps, Response>> = (props: ChildProps<IProps, Response>) => {
  const fixedFormat = (e: number) => {
    return e < 100 ? e.toFixed(2) : e.toFixed(0)
  }

  const shouldResubscribe = (curProps: any, nextProps: any) => {
    if (curProps.variables.markets[0] !== nextProps.variables.markets[0]) {
      return true
    }
    return false
  }

  return (
    <Subscription<onMarketSubscription, onMarketSubscriptionVariables>
      subscription={MarketSubscription}
      variables={{ markets: [props.id] }}
      shouldResubscribe={shouldResubscribe}
    >
      {({ data, loading }) => {
        if (loading) {
          return <></>
        }
        if (data && data.getQuotes) {
          const { change, changePercent, latestPrice } = data.getQuotes
          if (change !== null && changePercent !== null && latestPrice !== null) {
            const [Icon, color] =
              (change || 0) < 0 ? [ArrowDownward, colors.accents.bad.base] : [ArrowUpward, colors.accents.good.base]
            return (
              <Flex>
                <Large>$ {latestPrice}</Large>
                <Box px={1} />
                <Large
                  style={{ color, borderRight: `${props.theme.secondary.base} solid 0.125rem`, paddingRight: '0.5rem' }}
                >
                  <Icon
                    viewBox="0 0 20 20"
                    style={{ verticalAlign: 'super', fontSize: '1rem', marginRight: '0.25rem' }}
                  />
                  <Numeral>{fixedFormat(change)}</Numeral>
                </Large>
                <Large style={{ color, paddingLeft: '0.5rem' }}>
                  {' '}
                  <Numeral>{fixedFormat(changePercent * 100)}%</Numeral>
                </Large>
              </Flex>
            )
          }
        }
        return <></>
      }}
    </Subscription>
  )
}

export default withTheme(StockPrice)
