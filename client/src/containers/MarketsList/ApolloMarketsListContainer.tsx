import React from 'react'
import { ChildProps, Subscription, SubscriptionResult } from 'react-apollo'
import styled from 'styled-components'
import { MarketQuery, onMarketSubscription, onMarketSubscriptionVariables } from '../../__generated__/types'
import AdaptiveLoader from '../../common/AdaptiveLoader'
import { AppQuery } from '../../common/AppQuery'
import { DataContents, Text } from '../../common/StyledComponents'
import { StockPrice } from '../StockPrice/components'
import MarketsConnection from './graphql/MarketConnection.graphql'
import MarketSubscription from './graphql/MarketSubscription.graphql'

const ApolloMarketsListContainer: React.FunctionComponent<ChildProps<{}, Response>> = () => {
  const onMarketSubscriptionSuccess = (results: SubscriptionResult<onMarketSubscription>): JSX.Element => {
    const { data, loading } = results
    if (loading) {
      return <AdaptiveLoader size={35} speed={1.4} />
    }
    if (data) {
      const stockPrice = data.getQuotes
      return <StockPrice fontSize={0.75} stockPrice={stockPrice} symbol={stockPrice.id} />
    }
    return <></>
  }

  const onMarketQueryResults: (data: MarketQuery) => JSX.Element = ({ markets }) => {
    return (
      <DataContents style={{ gridGap: '0.1rem' }}>
        <Text>US Markets</Text>
        <MarketList>
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
        </MarketList>
      </DataContents>
    )
  }

  return <AppQuery<MarketQuery, {}> query={MarketsConnection}>{onMarketQueryResults}</AppQuery>
}

const MarketList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
`

export default ApolloMarketsListContainer
