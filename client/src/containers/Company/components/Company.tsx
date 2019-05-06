import React from 'react'
import { Caption, DataCard, Header, Title } from '../../../common/StyledComponents'

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
    <DataCard>
      <Header>
        <Title>Company Overview</Title>
      </Header>
      <span>
        {name} ({symbol})
      </span>
      <a target="_blank" href={website} color="offwhite50">
        <Caption>{website.replace(URL, '')}</Caption>
      </a>
      <span>{description}</span>
    </DataCard>
  )
}
export default Company
