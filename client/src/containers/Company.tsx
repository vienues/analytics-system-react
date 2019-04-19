// <reference> queryml.d.ts
import React from 'react'
import { ChildProps, graphql } from 'react-apollo'
import { Box } from 'rebass'
import { compose } from 'recompose'
import { CompanyQuery, CompanyQueryVariables } from '../__generated__/types'
import { loadable } from '../common'
import CompanyConnection from '../graphql/CompanyConnection.graphql'
import { AnalyticsStyle, Header, Title } from '../rt-theme/analyticsStyle'
import { Caption, HyperLinkedBlockLink, Lead, Text } from '../styleguide'

const URL = /(http(s)?:\/\/)?/

export interface IProps {
  id?: string
}

export interface IDataProps {
  data?: CompanyQuery
}

type Props = IProps & IDataProps

const Company: React.FunctionComponent<ChildProps<Props, Response>> = (props: ChildProps<Props, Response>) => {
  if (props.data && props.data.stock) {
    const { company } = props.data.stock
    if (company) {
      return (
        <AnalyticsStyle style={{ height: 'initial', marginBottom: '10px' }}>
          <Header>
            <Title>Company Overview</Title>
          </Header>
          <Box>
            <Lead>
              {company.name} ({company.symbol})
            </Lead>
            {company.website ? (
              <HyperLinkedBlockLink target="_blank" href={company.website} f={1} color="offwhite50" mt={1}>
                <Caption>{company.website.replace(URL, '')}</Caption>
              </HyperLinkedBlockLink>
            ) : (
              <></>
            )}
            <Text>{company.description}</Text>
          </Box>
        </AnalyticsStyle>
      )
    }
  }
  return <></>
}

const withCustomerData = graphql<Response, CompanyQueryVariables>(CompanyConnection, {
  options: ({ id }: any) => ({
    variables: { id },
  }),
})

export default compose(
  withCustomerData,
  loadable,
)(Company) as any
