import React from 'react'
import { Subscription, SubscriptionResult } from 'react-apollo'
import { Line, LineChart, Tooltip, YAxis } from 'recharts'
import {
  ABMHistoryQuery,
  ABMHistoryQueryVariables,
  onStockPriceSubscription,
  onStockPriceSubscriptionVariables,
} from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import StockPriceSubscription from '../stock-price/graphql/StockPriceSubscription.graphql'
import ABMHistoryConnection from './graphql/ABMHistoryConnection.graphql'

export const ApolloABMHistoryContainer: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  const onHistoryQueryResults = ({ getPriceHistory }: ABMHistoryQuery): JSX.Element => {
    // const yAxisRange = getPriceHistory.reduce(
    //   (acc, val) => {
    //     if (val.ask > acc.max) {
    //       acc.max = val.ask
    //     } else if (val.bid < acc.min) {
    //       acc.min = val.bid
    //     }
    //     return acc
    //   },
    //   { min: Infinity, max: -Infinity },
    // )
    return (
      <>
        <Subscription<onStockPriceSubscription, onStockPriceSubscriptionVariables>
          subscription={StockPriceSubscription}
          shouldResubscribe={true}
          variables={{ markets: [id] }}
        >
          {({ data, loading }: SubscriptionResult<onStockPriceSubscription>) => {
            if (!loading && data && data.getQuotes.latestPrice) {
              getPriceHistory.push({
                creationTimestamp: '',
                mid: data.getQuotes.latestPrice,
                __typename: 'FxPricing',
                ask: 0,
                bid: 0,
                valueDate: '',
              })
            }
            const chartData = getPriceHistory.slice(getPriceHistory.length - 100, getPriceHistory.length)
            return (
              <LineChart width={1000} height={600} data={chartData}>
                <YAxis domain={['dataMin', 'dataMax']} scale="auto" />
                <Tooltip />
                <Line dot={false} type="monotone" dataKey="mid" stroke="#54606D" />
              </LineChart>
            )
          }}
        </Subscription>
      </>
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
