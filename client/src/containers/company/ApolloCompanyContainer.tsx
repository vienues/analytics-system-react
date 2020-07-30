import React from 'react'
import { AppQuery } from '../../common/AppQuery'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { Company } from './components'
import CompanyConnection from './graphql/CompanyConnection.graphql'
import { CompanyQuery, CompanyQueryVariables } from './graphql/types/CompanyQuery'

const ApolloCompanyContainer: React.FunctionComponent<IApolloContainerProps> = ({ id }) => {
  const onCompanyQueryResults = (data: CompanyQuery): JSX.Element => <Company company={data.stock.company} />

  return (
    <AppQuery<CompanyQuery, CompanyQueryVariables>
      query={CompanyConnection}
      variables={{ id }}
      renderLoadingHeight="175px"
    >
      {onCompanyQueryResults}
    </AppQuery>
  )
}

export default ApolloCompanyContainer
