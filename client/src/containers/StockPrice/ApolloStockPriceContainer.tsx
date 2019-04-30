import React from 'react'
import { ChildProps, Subscription, SubscriptionProps, SubscriptionResult } from 'react-apollo'
import { onStockPriceSubscription, onStockPriceSubscriptionVariables } from '../../__generated__/types'
import { AdaptiveLoader } from '../../styleguide/AdaptiveLoader'
import { StockPrice, StockPriceData } from './components'
import StockPriceSubscription from './graphql/StockPriceSubscription.graphql'

interface IProps {
  id: string
}

const ApolloStockPriceContainer: React.FunctionComponent<ChildProps<IProps, Response>> = (
  props: ChildProps<IProps, Response>,
) => {
  const onStockPriceSubscriptionSuccess = (results: SubscriptionResult<onStockPriceSubscription>): JSX.Element => {
    const { data, loading } = results
    if (loading) {
      return <AdaptiveLoader size={50} speed={1.4} />
    }

    if (data && data.getQuotes) {
      const stockPrice = data.getQuotes as StockPriceData
      return <StockPrice stockPrice={stockPrice} />
    }

    return <></>
  }

  const shouldResubscribe = (
    curProps: SubscriptionProps<onStockPriceSubscription, onStockPriceSubscriptionVariables>,
    nextProps: SubscriptionProps<onStockPriceSubscription, onStockPriceSubscriptionVariables>,
  ) => {
    if (curProps.variables && nextProps.variables) {
      if (curProps.variables.markets[0] !== nextProps.variables.markets[0]) {
        return true
      }
    }
    return false
  }

  return (
    <Subscription<onStockPriceSubscription, onStockPriceSubscriptionVariables>
      subscription={StockPriceSubscription}
      variables={{ markets: [props.id] }}
      shouldResubscribe={shouldResubscribe}
    >
      {onStockPriceSubscriptionSuccess}
    </Subscription>
  )
}

export default ApolloStockPriceContainer
