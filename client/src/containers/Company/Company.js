import gql from 'graphql-tag'
import React, { Fragment } from 'react'
import { Box, Measure, Flex } from 'rebass'
import { PanelHeading } from '../../components'
import { Lead, BlockLink, Gutter } from '../../styleguide'

const URL = /(http(s)?:\/\/)?/

export const Company = props => {
  const { company, peers } = props.data.stock

  return (
    <Box flex={1}>
      <Lead mt={2} f={3}>
        {company.name} ({company.symbol})
      </Lead>
      <BlockLink target="_blank" href={company.website} f={1} color="offwhite50" mt={1} fontStyle="italic">
        {company.website.replace(URL, '')}
      </BlockLink>
      <Measure mt={1} f={1} color="offwhite">
        <Lead f={1}>{company.description}</Lead>
      </Measure>
      {peers.length > 0 && (
        <Fragment>
          <Gutter />
          <PanelHeading>Top Peers</PanelHeading>
          <Flex mt={1} color="offwhite50">
            {peers.map(symbol => (
              <BlockLink key={symbol} href={`/stock/${symbol}`} pr={1}>
                {symbol}
              </BlockLink>
            ))}
          </Flex>
        </Fragment>
      )}
    </Box>
  )
}

Company.fragment = gql`
  fragment Company on Stock {
    company {
      id
      symbol
      name
      exchange
      industry
      website
      description
      CEO
      issueType
      sector
    }
    peers
  }
`

export default Company
