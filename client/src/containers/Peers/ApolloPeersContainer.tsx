import React from 'react'
import { ChildProps } from 'react-apollo'
import { PeersQuery, PeersQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { Peers } from './components'
import CompanyConnection from './graphql/PeersConnection.graphql'

const ApolloPeersContainer: React.FunctionComponent<ChildProps<IApolloContainerProps, Response>> = ({ id }) => {
  const onCompanyQueryResult: (data: PeersQuery) => JSX.Element = ({ stock: { peers } }) => {
    return <Peers peers={peers} />
  }

  return (
    <AppQuery<PeersQuery, PeersQueryVariables> query={CompanyConnection} variables={{ id }}>
      {onCompanyQueryResult}
    </AppQuery>
  )
}

export default ApolloPeersContainer
