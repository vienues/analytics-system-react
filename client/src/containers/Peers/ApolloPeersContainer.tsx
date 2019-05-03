import React from 'react'
import { ChildProps } from 'react-apollo'
import { PeersQuery, PeersQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { Peers } from './components'
import CompanyConnection from './graphql/PeersConnection.graphql'

const ApolloPeersContainer: React.FunctionComponent<ChildProps<IApolloContainerProps, Response>> = ({
  id,
  gridArea,
}) => {
  const onCompanyQueryResult = (data: PeersQuery): JSX.Element => {
    let peers = [] as string[]
    if (data.stock && data.stock.peers) {
      peers = data.stock.peers as string[]
    }
    return <Peers peers={peers} />
  }

  return (
    <div style={{ gridArea }}>
      <AppQuery<PeersQuery, PeersQueryVariables> query={CompanyConnection} variables={{ id }}>
        {onCompanyQueryResult}
      </AppQuery>
    </div>
  )
}

export default ApolloPeersContainer
