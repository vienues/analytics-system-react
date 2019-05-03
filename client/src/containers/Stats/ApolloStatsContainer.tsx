import * as React from 'react'
import { ChildProps } from 'react-apollo'
import { StatsQuery, StatsQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import StatsConnection from '../../graphql/StatsConnection.graphql'
import { Stats } from './components'

const ApolloStatsContainer: React.FunctionComponent<ChildProps<IApolloContainerProps, Response>> = ({ id }) => {
  const onStatsQueryResults = (data: StatsQuery): JSX.Element => {
    if (data.stock && data.stock.stats && data.stock.quote) {
      return <Stats stock={data.stock} />
    } else {
      return <></>
    }
  }

  return (
    <AppQuery<StatsQuery, StatsQueryVariables> query={StatsConnection} variables={{ id }}>
      {onStatsQueryResults}
    </AppQuery>
  )
}

export default ApolloStatsContainer
