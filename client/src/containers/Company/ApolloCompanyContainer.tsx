import React from 'react'
import { CompanyQuery, CompanyQueryVariables } from '../../__generated__/types'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { Company, CompanyDetails } from './components'
import CompanyConnection from './graphql/CompanyConnection.graphql'

const ApolloCompanyContainer: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  const onCompanyQueryResults = (data: CompanyQuery): JSX.Element => {
    const company = data.stock.company as CompanyDetails
    return <Company company={company} />
  }

  return (
    <AppQuery<CompanyQuery, CompanyQueryVariables> query={CompanyConnection} variables={{ id }}>
      {onCompanyQueryResults}
    </AppQuery>
  )
}

export default ApolloCompanyContainer
