import React from 'react'
import { CompanyQuery_stock_company as CompanyDetails } from '../../../__generated__/types'
import { Caption, DataCard, Link, OpaqueLabel, Subheading } from '../../../common/StyledComponents'
import { openUrlInBrowser } from 'platformService/openUrlInBrowser'

const URL = /(http(s)?:\/\/)?/

const Company: React.FunctionComponent<{ company: CompanyDetails }> = ({
  company: { description, name, symbol, website },
}) => (
  <DataCard cardType="company" title="Summary" instrument={symbol}>
    <Link target="_blank" href={website || ''} onClick={openUrlInBrowser}>
      <Subheading>
        {name} ({symbol})
      </Subheading>
      <Caption>{(website || '').replace(URL, '')}</Caption>
    </Link>
    <OpaqueLabel>{description}</OpaqueLabel>
  </DataCard>
)

export default Company
