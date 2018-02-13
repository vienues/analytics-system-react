import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Box, Heading, Flex, Lead, Small, Input, NavLink, Measure, Label, Text } from 'rebass'

import { Edge, Bleed, Divider, SectionHeading } from '../../styleguide'

import StockHistory from '../../components/StockHistory'

import CompanyData from '../CompanyData'

const ChartHeading = ({ children, mt, mb }) => [
  <Heading key="heading" mt={mt} f={1} caps color="gray5">
    {children}
  </Heading>,
  <Divider key="divider" my={1} mb={mb} />,
]

export default class Chart extends PureComponent {
  render() {
    return (
      <Flex flex="1">
        <Bleed full>
          <StockHistory />
        </Bleed>
        <Box width="20rem" bg="gray0">
          <Bleed flex="1" py={2}>
            <ChartHeading>Latest News</ChartHeading>
          </Bleed>
          <Bleed flex="1" py={2}>
            <ChartHeading>Company Overview</ChartHeading>
            <CompanyData id={this.props.id} is={CompanySidebar} />
          </Bleed>
        </Box>
      </Flex>
    )
  }
}

export const CompanySidebar = props => {
  if (props.data.loading) {
    return 'loading'
  }
  if (props.data.company == null) {
    return 'error loading data'
  }

  return (
    <Box flex={1}>
      <Heading f={1}>
        {props.data.company.name}
        ({props.data.company.symbol})
      </Heading>
    </Box>
  )
}
