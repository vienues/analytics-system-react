import React from 'react'
import styled from 'styled-components/macro'
import { AppQuery } from '../../common/AppQuery'
import { DataContents } from '../../common/StyledComponents'
import { MarketQuery } from '../../__generated__/types'
import MarketsConnection from './graphql/MarketConnection.graphql'
import MarketSubscription from './MarketSubscription'
import { mediaQuery } from 'rt-theme/mediaQueries'

const ApolloMarketsListContainer = () => {
  const onMarketQueryResults: (data: MarketQuery) => JSX.Element = ({ markets }) => {
    return (
      <DataContents style={{ gridGap: '0.1rem' }}>
        <MarketList>
          {markets.map(market => (
            <MarketSubscription key={market.id || ''} variables={{ markets: [market.id || ''] }} />
          ))}
        </MarketList>
      </DataContents>
    )
  }

  return <AppQuery<MarketQuery, {}> query={MarketsConnection}>{onMarketQueryResults}</AppQuery>
}

const MarketList = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin: 0 auto;
  @media ${mediaQuery.desktopS} {
    margin: unset;
  }
`

export default ApolloMarketsListContainer
