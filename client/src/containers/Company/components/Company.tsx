import React from 'react'
import { AnalyticsStyle, Header, Title } from '../../../rt-theme/analyticsStyle'
import { Caption, HyperLinkedBlockLink, Lead, Text } from '../../../styleguide'

const URL = /(http(s)?:\/\/)?/

export interface ICompanyDetails {
  name: string
  symbol: string
  website: string
  description: string
}

interface ICompanyProps {
  company: ICompanyDetails
}

const Company: React.FunctionComponent<ICompanyProps> = props => {
  const { description, name, symbol, website } = props.company
  return (
    <AnalyticsStyle>
      <Header>
        <Title>Company Overview</Title>
      </Header>
      <Lead>
        {name} ({symbol})
      </Lead>
      <HyperLinkedBlockLink target="_blank" href={website} f={1} color="offwhite50" mt={1}>
        <Caption>{website.replace(URL, '')}</Caption>
      </HyperLinkedBlockLink>
      <Text>{description}</Text>
    </AnalyticsStyle>
  )
}
export default Company
