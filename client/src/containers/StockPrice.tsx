// <reference> queryml.d.ts
import React from 'react'
import styled from 'styled-components'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import Numeral from '../components/Numeral'
import { loadable, maybe } from '../common'
import { Flex, Box } from 'rebass'
import { Text } from '../styleguide'

import { compose } from 'recompose'
import { graphql } from 'react-apollo'

import subscribeMarket from '../graphql/MarketSubscription.graphql'

import query from '../graphql/StockPriceConnection.graphql'

export interface IProps {
  data: {
    stock: {
      quote: any
    }
  }
}

export interface IState {}

class StockPrice extends React.Component<IProps, IState> {
  public componentWillReceiveProps(nextProps: any) {
    const viewmodel = this as any
    if (nextProps.data.loading) {
      return
    }

    if (!viewmodel.props.data.stock) {
      viewmodel.unsubscribe && viewmodel.unsubscribe()
      return
    }

    if (viewmodel.props.data.stock.id !== nextProps.data.stock.id) {
      viewmodel.unsubscribe && viewmodel.unsubscribe()
      viewmodel.unsubscribe = nextProps.data.subscribeToMore({
        document: subscribeMarket,
        variables: {
          markets: nextProps.data.stock.id,
        },
        updateQuery: (prev: any, { subscriptionData }: any) => {
          const stockCpy = { ...prev.stock, quote: subscriptionData.data.getQuotes }
          return { ...prev, stock: stockCpy }
        },
      })
    }
  }

  public componentWillUnmount() {
    const viewmodel = this as any
    if (viewmodel.unsubscribe) {
      viewmodel.unsubscribe()
    }
  }

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

export default compose(
  maybe({ cond: ({ id }: any) => id == null }),
  graphql(query, {
    skip: (ownProps: any) => !ownProps.id,
    // @ts-ignore
  }),
  loadable,
)(StockPrice)
