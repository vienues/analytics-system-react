import React from 'react'
import styled from 'styled-components'

import { Flex, Box } from 'rebass'
import { Text, Small, colors } from '../../styleguide'
import Numeral from '../../components/Numeral'
import ArrowUpward from 'material-ui-icons/ArrowUpward'
import ArrowDownward from 'material-ui-icons/ArrowDownward'

const Markets = ({ data: { markets } }) => {
  return (
    <Flex align="center">
      {markets.map(({ id, change, changePercent, latestPrice }) => {
        const [Icon, color] = change < 0 ? [ArrowDownward, 'bad'] : [ArrowUpward, 'good']
        return (
          <Flex key={id} pr={2} align="baseline">
            <Small caps bold color="white">
              {id}
            </Small>
            <Box pr={1} />
            <Currency color={colors.white}>{latestPrice}</Currency>
            <Box pr={1} />
            <Text color={color}>
              <Icon
                fontSize
                viewBox="0 0 20 20"
                style={{ verticalAlign: 'super', fontSize: '0.5rem', marginRight: '0.25rem' }}
              />
              <Numeral>{change}</Numeral>
            </Text>
            <VerticalRule color={color} />
            <Percent color={color}>
              {' '}
              <Numeral>{changePercent * 100}</Numeral>
            </Percent>
          </Flex>
        )
      })}
    </Flex>
  )
}

const SuperText = styled(Small)`
  line-height: 1em;

  &:after,
  &:before {
    display: inline-block;
    vertical-align: super;
    font-size: 1rem;
    line-height: 1;

    height: 0;
    max-height: 0;
  }
`

const Currency = styled(SuperText)`
  &:before {
    content: '$';
    font-size: 0.5rem;
    padding-right: 0.25rem;
  }
`

const Percent = styled(SuperText)`
  &:after {
    content: '%';
    font-size: 0.5rem;
    padding-left: 0.125rem;
  }
`

const VerticalRule = ({ color }) => (
  <svg width="8" height="12" viewBox="0 0 8 20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4,4 L4,24"
      stroke={colors[color]}
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
      opacity=".5"
      strokeLinecap="square"
    />
  </svg>
)

export default Markets
