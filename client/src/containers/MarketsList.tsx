import ArrowDownward from '@material-ui/icons/ArrowDownward'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import React, { useEffect, useState } from 'react'
import { ChildProps } from 'react-apollo'
import { Box, Flex } from 'rebass'
import { onQuoteQuery, QuoteQuery } from '../__generated__/types'
import { AppQuery } from '../common/AppQuery'
import Numeral from '../components/Numeral'
import MarketsConnection from '../graphql/QuoteConnection.graphql'
import QuoteSubscription from '../graphql/QuoteSubscription.graphql'
import { colors } from '../rt-theme'
import { Currency, Percent, Small, Text, VerticalRuleStyled } from '../styleguide'

interface IMarketListProps {
  subscribeToMore: () => void
  data: any
}

const MarketListView: React.FunctionComponent<ChildProps<IMarketListProps, Response>> = (
  props: ChildProps<IMarketListProps, Response>,
) => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (!initialized) {
      props.subscribeToMore()
      setInitialized(true)
    }
  })

  const { data } = props

  return (
    <Flex>
      {data.markets.map(({ id, change, changePercent, latestPrice }: any) => {
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
            <VerticalRuleStyled className="" />
            <Percent color={color}>
              {' '}
              <Numeral>{(changePercent * 100).toFixed(2)}</Numeral>
            </Percent>
          </Flex>
        )
      })}
    </Flex>
  )
}

const MarketList: React.FunctionComponent<ChildProps<{}, Response>> = () => (
  <AppQuery query={MarketsConnection}>
    {(_, obj: any) => {
      const { data, loading, error, subscribeToMore } = obj
      if (loading) {
        return <p>Loading...</p>
      }
      if (error) {
        return <p>Error: {error.message}</p>
      }
      const more = () =>
        subscribeToMore({
          document: QuoteSubscription,
          updateQuery: (
            { markets }: QuoteQuery,
            { subscriptionData }: { subscriptionData: { data: onQuoteQuery } },
          ) => {
            if (!subscriptionData.data) {
              return markets
            }
            const copy = [...markets]
            const index = copy.findIndex(({ id }) => id === subscriptionData.data.getQuotes.id)
            const x = { ...copy[index] }
            copy.splice(index, 1, x)
            return { markets: copy }
          },
          variables: {
            markets: data.markets.map((x: any) => x.id),
          },
        })
      return <MarketListView data={data} subscribeToMore={more} />
    }}
  </AppQuery>
)

export default MarketList
