import React from 'react'
import { Caption, DataCard, Link, Subheading, Text } from '../../../common/StyledComponents'

const URL = /(http(s)?:\/\/)?/

export interface ICompanyDetails {
  name: string
  symbol: string
  website: string
  description: string
}

const Company: React.FunctionComponent<{ company: ICompanyDetails }> = ({
  company: { description, name, symbol, website },
}) => (
  <DataCard cardType="company" title="Company Overview">
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
