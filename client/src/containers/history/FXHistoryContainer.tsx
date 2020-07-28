import { HistoryWrapper } from 'common/StyledComponents'
import React from 'react'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { ABMHistoryQuery, ABMHistoryQueryVariables } from '../../__generated__/types'
import { FXHistoryChart } from './components/FXHistoryChart'
import ABMHistoryConnection from './graphql/ABMHistoryConnection.graphql'

const FXHistory: React.FC<IApolloContainerProps> = ({ id }) => {
  const from = id.slice(0, 3)
  const to = id.slice(3)

  return (
    <>
      <AppQuery<ABMHistoryQuery, ABMHistoryQueryVariables> query={ABMHistoryConnection} variables={{ from, to }}>
        {FXHistoryChart}
      </AppQuery>
    </>
  )
}

const FXHistoryContainer: React.FC<IApolloContainerProps> = ({ id }) => (
  <HistoryWrapper>
    <FXHistory id={id} />
  </HistoryWrapper>
)

export default FXHistoryContainer
