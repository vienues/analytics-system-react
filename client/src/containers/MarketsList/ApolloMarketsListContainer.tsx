import React from 'react'
import { ChildProps, Subscription, SubscriptionResult } from 'react-apollo'
import { MarketQuery, onMarketSubscription, onMarketSubscriptionVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { StockPrice } from '../StockPrice/components'
import MarketsConnection from './graphql/MarketConnection.graphql'
import MarketSubscription from './graphql/MarketSubscription.graphql'

import { VerticalDataContents } from '../../common/StyledComponents'

const ApolloMarketsListContainer: React.FunctionComponent<ChildProps<{}, Response>> = () => {
  const onMarketSubscriptionSuccess = (results: SubscriptionResult<onMarketSubscription>): JSX.Element => {
    const { data, loading } = results
    if (loading) {
      return <>loading...</>
    }
    if (data) {
      const stockPrice = data.getQuotes
      return <StockPrice fontSize={0.75} stockPrice={stockPrice} symbol={stockPrice.id} />
    }
    return <></>
  }

  const onMarketQueryResults: (data: MarketQuery) => JSX.Element = ({ markets }) => {
    return (
      <VerticalDataContents>
        {markets.map(market => (
          <Subscription<onMarketSubscription, onMarketSubscriptionVariables>
            key={market.id || ''}
            subscription={MarketSubscription}
            variables={{ markets: [market.id || ''] }}
            shouldResubscribe={false}
          >
            {onMarketSubscriptionSuccess}
          </Subscription>
        ))}
      </VerticalDataContents>
    )
  }

  return <AppQuery<MarketQuery, {}> query={MarketsConnection}>{onMarketQueryResults}</AppQuery>
}

export default ApolloMarketsListContainer
