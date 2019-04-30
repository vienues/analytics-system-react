import React from 'react'
import { ChildProps, Subscription, SubscriptionResult } from 'react-apollo'
import {
  MarketQuery,
  MarketQuery_markets,
  onMarketSubscription,
  onMarketSubscriptionVariables,
} from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import MarketsConnection from './graphql/MarketConnection.graphql'
import MarketSubscription from './graphql/MarketSubscription.graphql'

import { MarketsList, MarketsListItem, MarketsListItemProps } from './components'

const ApolloMarketsListContainer: React.FunctionComponent<ChildProps<{}, Response>> = () => {
  const onMarketSubscriptionSuccess = (results: SubscriptionResult<onMarketSubscription>): JSX.Element => {
    const { data, loading } = results
    if (loading) {
      return <>loading...</>
    }
    if (data && data.getQuotes) {
      const marketsListItemData = data.getQuotes as MarketsListItemProps
      return <MarketsListItem {...marketsListItemData} />
    }
    return <></>
  }

  const onMarketQueryResults = (data: MarketQuery): JSX.Element => {
    const markets = (data.markets || []) as MarketQuery_markets[]
    return (
      <MarketsList>
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
      </MarketsList>
    )
  }

  return <AppQuery<MarketQuery, {}> query={MarketsConnection}>{onMarketQueryResults}</AppQuery>
}

export default ApolloMarketsListContainer
