// <reference> queryml.d.ts
import React from 'react'
import { ChildProps } from 'react-apollo'
import { CompanyQuery, CompanyQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { Company, CompanyDetails } from './components'
import CompanyConnection from './graphql/CompanyConnection.graphql'

const ApolloCompanyContainer: React.FunctionComponent<ChildProps<IApolloContainerProps, Response>> = ({ id }) => {
  const onCompanyQueryResults = (data: CompanyQuery): JSX.Element => {
    let retElement = <></>
    if (data.stock && data.stock.company) {
      const company = data.stock.company as CompanyDetails
      retElement = <Company company={company} />
    }
    return retElement
  }

  return (
    <AppQuery<CompanyQuery, CompanyQueryVariables> query={CompanyConnection} variables={{ id }}>
      {onCompanyQueryResults}
    </AppQuery>
  )
}

export default ApolloCompanyContainer
