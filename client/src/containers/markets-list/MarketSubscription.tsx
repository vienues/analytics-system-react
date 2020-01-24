import { useSubscription } from '@apollo/react-hooks'
import { onMarketSubscription, onMarketSubscriptionVariables } from '__generated__/types'
import React from 'react'
import AdaptiveLoader from '../../common/AdaptiveLoader'
import { StockPrice } from '../stock-price/components'
import MarketQuery from './graphql/MarketSubscription.graphql'

const MarketSubscription = ({ variables }: { variables: onMarketSubscriptionVariables }) => {
  const { loading, data } = useSubscription<onMarketSubscription, onMarketSubscriptionVariables>(MarketQuery, {
    shouldResubscribe: false,
    variables,
  })
  if (loading) {
    return <AdaptiveLoader size={35} speed={1.4} />
  }
  if (data) {
    const stockPrice = data.getQuotes
    return <StockPrice fontSize={0.75} stockPrice={stockPrice} symbol={stockPrice.id} />
  }
  return <></>
}

export default MarketSubscription
