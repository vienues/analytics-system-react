import React from 'react'
import styled from 'styled-components'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import Numeral from '../../components/Numeral'

import { Flex, Box } from 'rebass'
import { Text } from '../../styleguide'

export interface IProps {
  data: {
    stock: {
      quote: any
    }
  }
}

export interface IState {}

class StockPrice extends React.Component<IProps, IState> {
  public render() {
    const quote = this.props.data.stock.quote
    const [Icon, color] = quote.change < 0 ? [ArrowDownward, 'bad'] : [ArrowUpward, 'good']
    const { latestPrice, change, changePercent } = quote
    return (
      <Flex data-x={'ssss'} flex="none" color="primary30">
        <Currency>{latestPrice}</Currency>
        <Box px={1} />
        <Text color={color}>
          <Icon viewBox="0 0 20 20" style={{ verticalAlign: 'super', fontSize: '1rem', marginRight: '0.25rem' }} />
          <Numeral>{change}</Numeral>
        </Text>
        <VerticalRuleStyled className="" />
        <Percent color={color}>
          {' '}
          <Numeral>{changePercent * 100}</Numeral>
        </Percent>
      </Flex>
    )
  }
}

const SuperText = styled(Text)`
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
    padding-right: 0.25rem;
  }
`

const Percent = styled(SuperText)`
  &:after {
    content: '%';
    padding-left: 0.125rem;
  }
`

const VerticalRule = ({ className }: any) => (
  <svg className={className} width="20" height="32" viewBox="0 0 20 32" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.25,0 L9.25,32"
      stroke={'#fff'}
      strokeWidth="1.5"
      fill="none"
      fillRule="evenodd"
      opacity=".5"
      strokeLinecap="square"
    />
  </svg>
)

const VerticalRuleStyled = styled(VerticalRule)`
  > path {
    stroke: ${({ color, theme }: any) => theme.colors[color]};
  }
`

export default StockPrice
