import { useSubscription } from '@apollo/react-hooks'
import React, { useEffect, useState } from 'react'
import { onStockPriceSubscription, onStockPriceSubscriptionVariables } from '../../__generated__/types'
import AdaptiveLoader from '../../common/AdaptiveLoader'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { StockPrice, StockPriceData } from './components'
import StockPriceSubscription from './graphql/StockPriceSubscription.graphql'

const ApolloStockPriceContainer: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  const [shouldResubscribe, setShouldResubscribe] = useState(true)
  const [currentId, setCurrentId] = useState(id)

  useEffect(() => {
    if (currentId && id) {
      if (currentId !== id) {
        setShouldResubscribe(true)
        setCurrentId(id)
        return
      }
    }
    setShouldResubscribe(false)
  }, [currentId, id, setShouldResubscribe, setCurrentId])

  const { loading, data } = useSubscription<onStockPriceSubscription, onStockPriceSubscriptionVariables>(
    StockPriceSubscription,
    {
      shouldResubscribe,
      variables: { markets: [id] },
    },
  )
  const onStockPriceSubscriptionSuccess = (): JSX.Element => {
    if (loading) {
      return <AdaptiveLoader size={50} speed={1.4} />
    }

    if (data && data.getQuotes) {
      const stockPrice = data.getQuotes as StockPriceData
      return <StockPrice stockPrice={stockPrice} />
    }

    return <></>
  }

  return <>{onStockPriceSubscriptionSuccess()}</>
}

export default ApolloStockPriceContainer
