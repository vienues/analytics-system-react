import * as React from 'react'
import { ChildProps } from 'react-apollo'
import { StatsQuery, StatsQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { Stats } from './components'
import StatsConnection from './graphql/StatsConnection.graphql'

const ApolloStatsContainer: React.FunctionComponent<ChildProps<IApolloContainerProps, Response>> = ({ id }) => {
  const onStatsQueryResults: (data: StatsQuery) => JSX.Element = ({ stock }) => {
    return <Stats stock={stock} />
  }

  return (
    <AppQuery<StatsQuery, StatsQueryVariables> query={StatsConnection} variables={{ id }}>
      {onStatsQueryResults}
    </AppQuery>
  )
}

export default ApolloStatsContainer
