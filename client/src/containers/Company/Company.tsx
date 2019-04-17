import gql from 'graphql-tag'
import React, { Fragment } from 'react'
import { Box, Flex } from 'rebass'
import { PanelHeading } from '../../components'
import { Lead, HyperLinkedBlockLink, Gutter } from '../../styleguide'
import { ChildProps } from 'react-apollo'

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
    const { company, peers } = this.props.data.stock

    return (
      <Box flex={1}>
        <Lead mt={2} f={3}>
          {company.name} ({company.symbol})
        </Lead>
        <HyperLinkedBlockLink target="_blank" href={company.website} f={1} color="offwhite50" mt={1}>
          {company.website.replace(URL, '')}
        </HyperLinkedBlockLink>
        <div>
          <Lead f={1}>{company.description}</Lead>
        </div>
        {peers.length > 0 && (
          <Fragment>
            <Gutter />
            <PanelHeading>Top Peers</PanelHeading>
            <Flex mt={1} color="offwhite50">
              {peers.map((symbol: any) => (
                <HyperLinkedBlockLink key={symbol} href={`/stock/${symbol}`} pr={1}>
                  {symbol}
                </HyperLinkedBlockLink>
              ))}
            </Flex>
          </Fragment>
        )}
      </Box>
    )
  }
}

export const COMPANY_QUERY = gql`
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
