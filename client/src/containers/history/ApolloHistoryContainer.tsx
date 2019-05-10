import moment from 'moment'
import React from 'react'
import { HistoryQuery, HistoryQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { History } from './components'
import HistoryConnection from './graphql/HistoryConnection.graphql'

export const ApolloHistoryContainer: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  const onHistoryQueryResults = ({
    stock: {
      quote: { previousClose },
      chart,
    },
  }: HistoryQuery): JSX.Element => {
    const mappedData = chart
      .filter(
        history => !!history && ((history.average || -1) > 0 || (history.low || -1) > 0 || (history.high || -1) > 0),
      )
      .map(history => ({
        x: moment(history.datetime).format('hh:mm:ss A'),
        y: `${history.average}`,
      }))
    return <History history={{ previousClose, dataPoints: mappedData }} />
  }

  return (
    <AppQuery<HistoryQuery, HistoryQueryVariables>
      query={HistoryConnection}
      variables={{ id }}
      renderLoadingHeight="275px"
    >
      {onHistoryQueryResults}
    </AppQuery>
  )
}

export default ApolloHistoryContainer
