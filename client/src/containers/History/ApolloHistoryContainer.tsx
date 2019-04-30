import _ from 'lodash'
import moment from 'moment'
import React from 'react'
import { ChildProps } from 'react-apollo'
import { HistoryQuery, HistoryQuery_stock_chart, HistoryQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import HistoryConnection from './graphql/HistoryConnection.graphql'

import { History } from './components'

export interface IProps {
  id: string
}

export const ApolloHistoryContainer: React.FunctionComponent<ChildProps<IProps, Response>> = (
  props: ChildProps<IProps, Response>,
) => {
  const onHistoryQueryResults = (data: HistoryQuery): JSX.Element => {
    let retElement = <></>
    if (data.stock && data.stock.chart && data.stock.quote && data.stock.quote.previousClose) {
      const previousClose = data.stock.quote.previousClose || 0
      const chart = (data.stock.chart || []) as HistoryQuery_stock_chart[]

      const mappedData = chart
        .filter(
          history => !!history && ((history.average || -1) > 0 || (history.low || -1) > 0 || (history.high || -1) > 0),
        )
        .map(history => ({
          x: moment(history.datetime).format('hh:mm:ss A'),
          y: `${history.average}`,
        }))
      retElement = <History history={{ previousClose, dataPoints: mappedData }} />
    }

    return retElement
  }

  return (
    <AppQuery<HistoryQuery, HistoryQueryVariables> query={HistoryConnection} variables={{ id: props.id }}>
      {onHistoryQueryResults}
    </AppQuery>
  )
}

export default ApolloHistoryContainer
