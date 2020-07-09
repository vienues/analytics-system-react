import { openUrlInBrowser } from 'platformService/openUrlInBrowser'
import React from 'react'
import { DataCard, Subheading } from '../../../common/StyledComponents'
import { CompanyQuery_stock_company as CompanyDetails } from '../../../__generated__/types'
import { CompanyCard, CompanyDescription, CompanyLink } from './Company.styles'

const URL = /(http(s)?:\/\/)?/

const Company: React.FunctionComponent<{ company: CompanyDetails }> = ({
  company: { description, name, symbol, website },
}) => (
  <CompanyCard>
    <DataCard cardType="company" title="Company Summary" instrument={symbol}>
      <Subheading>
        {name} ({symbol})
      </Subheading>
      <CompanyLink target="_blank" href={website || ''} onClick={openUrlInBrowser}>
        {(website || '').replace(URL, '')}
      </CompanyLink>
      <CompanyDescription>{description}</CompanyDescription>
    </DataCard>
  </CompanyCard>
)

export default Company
