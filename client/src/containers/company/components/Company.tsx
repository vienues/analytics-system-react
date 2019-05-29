import React from 'react'
import { CompanyQuery_stock_company as CompanyDetails } from '../../../__generated__/types'
import { Caption, DataCard, Link, OpaqueLabel, Subheading } from '../../../common/StyledComponents'

const URL = /(http(s)?:\/\/)?/

const Company: React.FunctionComponent<{ company: CompanyDetails }> = ({
  company: { description, name, symbol, website },
}) => (
  <DataCard cardType="company" title="Summary">
    <Link target="_blank" href={website || ''}>
      <Subheading>
        {name} ({symbol})
      </Subheading>
      <Caption>{(website || '').replace(URL, '')}</Caption>
    </Link>
    <OpaqueLabel>{description}</OpaqueLabel>
  </DataCard>
)

export default Company
