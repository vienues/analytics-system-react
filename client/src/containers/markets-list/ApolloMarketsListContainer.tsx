import React from 'react'
import styled from 'styled-components/macro'
import { AppQuery } from '../../common/AppQuery'
import { DataContents } from '../../common/StyledComponents'
import { MarketQuery } from '../../__generated__/types'
import MarketsConnection from './graphql/MarketConnection.graphql'
import MarketSubscription from './MarketSubscription'

const ApolloMarketsListContainer = () => {
  const onMarketQueryResults: (data: MarketQuery) => JSX.Element = ({ markets }) => {
    return (
      <DataContents style={{ gridGap: '0.1rem' }}>
        <MarketList>
          {markets.map((market) => (
            <MarketSubscription key={market.id || ''} variables={{ markets: [market.id || ''] }} />
          ))}
        </MarketList>
      </DataContents>
    )
  }

  return <AppQuery<MarketQuery, {}> query={MarketsConnection}>{onMarketQueryResults}</AppQuery>
}

const MarketList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export default ApolloMarketsListContainer
