import React from 'react'
import { PeersQuery, PeersQueryVariables } from './graphql/types/PeersQuery'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { Peers } from './components'
import CompanyConnection from './graphql/PeersConnection.graphql'

const ApolloPeersContainer: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  const onCompanyQueryResult = ({ stock: { peers } }: PeersQuery): JSX.Element => {
    return <Peers peers={peers} id={id} />
  }

  return (
    <AppQuery<PeersQuery, PeersQueryVariables> query={CompanyConnection} variables={{ id }} renderLoadingHeight="100px">
      {onCompanyQueryResult}
    </AppQuery>
  )
}

export default ApolloPeersContainer
