import React from 'react'
import { ChildProps, Subscription, SubscriptionProps, SubscriptionResult } from 'react-apollo'
import { onStockPriceSubscription, onStockPriceSubscriptionVariables } from '../../__generated__/types'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { AdaptiveLoader } from '../../styleguide/AdaptiveLoader'
import { StockPrice, StockPriceData } from './components'
import StockPriceSubscription from './graphql/StockPriceSubscription.graphql'

const ApolloStockPriceContainer: React.FunctionComponent<ChildProps<IApolloContainerProps, Response>> = ({
  id,
  gridArea,
}) => {
  const onStockPriceSubscriptionSuccess = (results: SubscriptionResult<onStockPriceSubscription>): JSX.Element => {
    const { data, loading } = results
    if (loading) {
      return <AdaptiveLoader size={50} speed={1.4} />
    }

    if (data && data.getQuotes) {
      const stockPrice = data.getQuotes as StockPriceData
      return <StockPrice fontSize={2} stockPrice={stockPrice} />
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
    <div style={{ gridArea, display: 'grid', justifyContent: 'end' }}>
      <Subscription<onStockPriceSubscription, onStockPriceSubscriptionVariables>
        subscription={StockPriceSubscription}
        variables={{ markets: [id] }}
        shouldResubscribe={shouldResubscribe}
      >
        {onStockPriceSubscriptionSuccess}
      </Subscription>
    </div>
  )
}

export default ApolloStockPriceContainer
