import moment from 'moment'
import React from 'react'
import { ChildProps } from 'react-apollo'
import { HistoryQuery, HistoryQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { History } from './components'
import HistoryConnection from './graphql/HistoryConnection.graphql'

export const ApolloHistoryContainer: React.FunctionComponent<ChildProps<IApolloContainerProps, Response>> = ({
  id,
}) => {
  const onHistoryQueryResults = (data: HistoryQuery): JSX.Element => {
    const previousClose = data.stock.quote.previousClose
    const chart = data.stock.chart

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
    <AppQuery<HistoryQuery, HistoryQueryVariables> query={HistoryConnection} variables={{ id }}>
      {onHistoryQueryResults}
    </AppQuery>
  )
}

export default ApolloHistoryContainer
