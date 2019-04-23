// <reference> queryml.d.ts
import React from 'react'
import { ChildProps } from 'react-apollo'
import { CompanyQuery, CompanyQueryVariables } from '../__generated__/types'
import { AppQuery } from '../common/AppQuery'
import CompanyConnection from '../graphql/CompanyConnection.graphql'
import { AnalyticsStyle, Header, Title } from '../rt-theme/analyticsStyle'
import { Caption, HyperLinkedBlockLink, Lead, Text } from '../styleguide'

const URL = /(http(s)?:\/\/)?/

export interface IProps {
  id: string
}

const Company: React.FunctionComponent<ChildProps<IProps, Response>> = (props: ChildProps<IProps, Response>) => {
  return (
    <AppQuery<CompanyQuery, CompanyQueryVariables> query={CompanyConnection} variables={{ id: props.id }}>
      {(data, _) => {
        if (data.stock && data.stock.company) {
          return (
            <AnalyticsStyle>
              <Header>
                <Title>Company Overview</Title>
              </Header>
              <Lead>
                {data.stock.company.name} ({data.stock.company.symbol})
              </Lead>
              {data.stock.company.website ? (
                <HyperLinkedBlockLink target="_blank" href={data.stock.company.website} f={1} color="offwhite50" mt={1}>
                  <Caption>{data.stock.company.website.replace(URL, '')}</Caption>
                </HyperLinkedBlockLink>
              ) : (
                <></>
              )}
              <Text>{data.stock.company.description}</Text>
            </AnalyticsStyle>
          )
        }
        return <></>
      }}
    </AppQuery>
  )
}

export default Company
