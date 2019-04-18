// <reference> queryml.d.ts
import React from 'react'
import { ChildProps, graphql } from 'react-apollo'
import { Box } from 'rebass'
import { compose } from 'recompose'
import { loadable } from '../common'
import COMPANY_QUERY from '../graphql/CompanyConnection.graphql'
import { AnalyticsStyle, Header, Title } from '../rt-theme/analyticsStyle'
import { Caption, HyperLinkedBlockLink, Lead, Text } from '../styleguide'

const URL = /(http(s)?:\/\/)?/

export interface IProps {
  data: {
    stock: {
      company: any
      peers: any
    }
  }
}

class Company extends React.Component<ChildProps<IProps, Response>, {}> {
  constructor(props: ChildProps<IProps, Response>) {
    super(props)
  }

  public render() {
    const { company } = this.props.data.stock

    return (
      <AnalyticsStyle style={{ height: 'initial', marginBottom: '10px' }}>
        <Header>
          <Title>Company Overview</Title>
        </Header>
        <Box>
          <Lead>
            {company.name} ({company.symbol})
          </Lead>
          <HyperLinkedBlockLink target="_blank" href={company.website} f={1} color="offwhite50" mt={1}>
            <Caption>{company.website.replace(URL, '')}</Caption>
          </HyperLinkedBlockLink>
          <Text>{company.description}</Text>
        </Box>
      </AnalyticsStyle>
    )
  }
}

export default compose(
  graphql(COMPANY_QUERY, {
    options: ({ id }: any) => ({
      variables: { id },
    }),
  }),
  loadable,
  // @ts-ignore
)(Company)
