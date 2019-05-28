import React from 'react'
import { HistoryQuery, HistoryQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { History } from './components'
import HistoryConnection from './graphql/HistoryConnection.graphql'

export const ApolloHistoryContainer: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  const onHistoryQueryResults = ({ OLHC }: HistoryQuery): JSX.Element => {
    return <History history={{ olhc: OLHC }} id={id} />
  }

  return (
    <>
      <AppQuery<HistoryQuery, HistoryQueryVariables>
        query={HistoryConnection}
        variables={{ id }}
        renderLoadingHeight="275px"
      >
        {onHistoryQueryResults}
      </AppQuery>
    </>
  )
}

export default ApolloHistoryContainer
