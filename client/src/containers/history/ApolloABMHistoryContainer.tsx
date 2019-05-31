import React from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { ABMHistoryQuery, ABMHistoryQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import ABMHistoryConnection from './graphql/ABMHistoryConnection.graphql'

export const ApolloABMHistoryContainer: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  const onHistoryQueryResults = ({ getPriceHistory }: ABMHistoryQuery): JSX.Element => {
    const yAxisRange = getPriceHistory.reduce(
      (acc, val) => {
        if (val.ask > acc.max) {
          acc.max = val.ask
        } else if (val.bid < acc.min) {
          acc.min = val.bid
        }
        return acc
      },
      { min: Infinity, max: -Infinity },
    )
    return (
      <LineChart width={1000} height={600} data={getPriceHistory}>
        <XAxis dataKey="creationTimestamp" />
        <YAxis domain={[yAxisRange.min, yAxisRange.max]} scale="auto" />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line dot={false} type="monotone" dataKey="ask" stroke="#8884d8" />
        <Line dot={false} type="monotone" dataKey="bid" stroke="#82ca9d" />
        <Line dot={false} type="monotone" dataKey="mid" stroke="#78ca9d" />
      </LineChart>
    )
  }

  const [from, to] = id.split('/')

  return (
    <>
      <AppQuery<ABMHistoryQuery, ABMHistoryQueryVariables>
        query={ABMHistoryConnection}
        variables={{ from, to }}
        renderLoadingHeight="275px"
      >
        {onHistoryQueryResults}
      </AppQuery>
    </>
  )
}

export default ApolloABMHistoryContainer
