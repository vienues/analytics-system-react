import { useSubscription } from '@apollo/react-hooks'
import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts'
import {
  ABMHistoryQuery,
  ABMHistoryQueryVariables,
  onStockPriceSubscription,
  onStockPriceSubscriptionVariables,
} from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { DataCard } from '../../common/StyledComponents'
import StockPriceSubscription from '../stock-price/graphql/StockPriceSubscription.graphql'
import ABMHistoryConnection from './graphql/ABMHistoryConnection.graphql'

export const ApolloABMHistoryContainer: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  const { loading, data } = useSubscription<onStockPriceSubscription, onStockPriceSubscriptionVariables>(
    StockPriceSubscription,
    {
      shouldResubscribe: true,
      variables: { markets: [id] },
    },
  )
  const onHistoryQueryResults = ({ getPriceHistory }: ABMHistoryQuery): JSX.Element => {
    if (!loading && data && data.getQuotes.latestPrice) {
      getPriceHistory.push({
        __typename: 'FxPricing',
        ask: 0,
        bid: 0,
        creationTimestamp: '',
        mid: data.getQuotes.latestPrice,
        valueDate: '',
      })
    }
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
    const chartData = getPriceHistory.slice(getPriceHistory.length - 100, getPriceHistory.length)
    return (
      <>
        <DataCard cardType="abm" instrument={id} title={`ABM History - ${id}`}>
          <ResponsiveContainer height={600}>
            <LineChart data={chartData}>
              <YAxis domain={['dataMin', 'dataMax']} scale="auto" />
              <Tooltip />
              <Line dot={false} type="monotone" dataKey="mid" stroke="#54606D" />
            </LineChart>
          </ResponsiveContainer>
        </DataCard>
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
