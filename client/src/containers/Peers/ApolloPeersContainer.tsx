import React from 'react'
import { ChildProps } from 'react-apollo'
import { PeersQuery, PeersQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import CompanyConnection from './graphql/PeersConnection.graphql'

import { Peers } from './components'

export interface IProps {
  id: string
}

const ApolloPeersContainer: React.FunctionComponent<ChildProps<IProps, Response>> = (
  props: ChildProps<IProps, Response>,
) => {
  const onCompanyQueryResult = (data: PeersQuery): JSX.Element => {
    let peers = [] as string[]
    if (data.stock && data.stock.peers) {
      peers = data.stock.peers as string[]
    }
    return <Peers peers={peers} />
  }

  return (
    <AppQuery<PeersQuery, PeersQueryVariables> query={CompanyConnection} variables={{ id: props.id }}>
      {onCompanyQueryResult}
    </AppQuery>
  )
}

export default ApolloPeersContainer
