import React from 'react'
import { Caption, DataCard, Heading, Link, Subheading, Text } from '../../../common/StyledComponents'

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

const Company: React.FunctionComponent<ICompanyProps> = ({ company: { description, name, symbol, website } }) => (
  <DataCard>
    <Heading>Company Overview</Heading>
    <Link target="_blank" href={website}>
      <Subheading>
        {name} ({symbol})
      </Subheading>
      <Caption>{website.replace(URL, '')}</Caption>
    </Link>
    <Text>{description}</Text>
  </DataCard>
)

export default Company
