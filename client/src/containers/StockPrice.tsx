import ArrowDownward from '@material-ui/icons/ArrowDownward'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import React, { useEffect, useState } from 'react'
import { ChildProps } from 'react-apollo'
import { Box, Flex } from 'rebass'
import { AppQuery } from '../common/AppQuery'
import Numeral from '../components/Numeral'
import MarketSubscription from '../graphql/MarketSubscription.graphql'
import StockPriceConnection from '../graphql/StockPriceConnection.graphql'
import { colors } from '../rt-theme'
import { Currency, Percent, Text, VerticalRuleStyled } from '../styleguide'

interface IStockPriceViewProps {
  subscribeToMore: () => void
  data: any
}

const StockPriceView: React.FunctionComponent<ChildProps<IStockPriceViewProps, Response>> = (
  props: ChildProps<IStockPriceViewProps, Response>,
) => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (!initialized) {
      props.subscribeToMore()
      setInitialized(true)
    }
  })

  const fixedFormat = (e: number) => {
    return e < 100 ? e.toFixed(2) : e.toFixed(0)
  }

  const { data } = props
  const quote = data.stock.quote
  const [Icon, color] =
    quote.change < 0 ? [ArrowDownward, colors.accents.bad.base] : [ArrowUpward, colors.accents.good.base]
  const { latestPrice, change, changePercent } = quote

  return (
    <Flex data-x={'ssss'} flex="none" color="primary30">
      <Currency>{latestPrice}</Currency>
      <Box px={1} />
      <Text color={color}>
        <Icon viewBox="0 0 20 20" style={{ verticalAlign: 'super', fontSize: '1rem', marginRight: '0.25rem' }} />
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

const StockPrice: React.FunctionComponent<ChildProps<{ id: string }, Response>> = (props: { id: string }) => (
  <AppQuery query={StockPriceConnection} variables={{ ...props }}>
    {(_, obj: any) => {
      const { data, subscribeToMore } = obj
      const more = () => {
        subscribeToMore({
          document: MarketSubscription,
          updateQuery: (prev: any, { subscriptionData }: any) => {
            const stockCpy = { ...prev.stock, quote: subscriptionData.data.getQuotes }
            return { ...prev, stock: stockCpy }
          },
          variables: {
            markets: data.stock.id,
          },
        })
      }

      return <StockPriceView data={data} subscribeToMore={more} />
    }}
  </AppQuery>
)

export default StockPrice
