// <reference> queryml.d.ts
import React from 'react'
import styled from 'styled-components'

import { Flex, Box } from 'rebass'
import { Text, Small } from '../styleguide'
import Numeral from '../components/Numeral'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import { compose } from 'recompose'
import { loadable } from '../common'

import { ChildProps, graphql } from 'react-apollo'

import subscribeMarket from '../graphql/QuoteSubscription.graphql'

import getMarkets from '../graphql/QuoteConnection.graphql'

export interface IProps {
  data: {
    markets: any
  }
}

class MarketsList extends React.Component<ChildProps<IProps, Response>, {}> {
  public componentWillReceiveProps(nextProps: any) {
    if (!nextProps.data.loading) {
      // Check for existing subscription
      // @ts-ignore
      if (this.unsubscribe) {
        // Check if props have changed and, if necessary, stop the subscription
        if (this.props.data.markets.length !== nextProps.data.markets.length) {
          console.log('unsubscribe')
          // @ts-ignore
          this.unsubscribe()
        }
        return
      }
    }
    ;(this as any).unsubscribe = nextProps.data.subscribeToMore({
      document: subscribeMarket,
      variables: {
        markets: nextProps.data.markets.map((x: any) => x.id),
      },
      updateQuery: ({ markets }: any, { subscriptionData, variables }: any) => {
        const copy = [...markets]
        const index = copy.findIndex(({ id }) => id === subscriptionData.data.getQuotes.id)
        const x = { ...copy[index] }
        copy.splice(index, 1, x)
        return { markets: copy }
      },
    })
  }

  public render() {
    return (
      <Flex>
        {this.props.data.markets.map(({ id, change, changePercent, latestPrice }: any) => {
          const [Icon, color] = change < 0 ? [ArrowDownward, 'bad'] : [ArrowUpward, 'good']
          return (
            <Flex key={id}>
              <Small caps bold>
                {id}
              </Small>
              <Box pr={1} />
              <Currency>{latestPrice}</Currency>
              <Box pr={1} />
              <Text color={color}>
                <Icon
                  viewBox="0 0 20 20"
                  style={{ verticalAlign: 'super', fontSize: '0.5rem', marginRight: '0.25rem' }}
                />
                <Numeral>{change}</Numeral>
              </Text>
              <VerticalRuleStyled className="" />
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

const VerticalRule = ({ className }: any) => (
  <svg className={className} width="8" height="12" viewBox="0 0 8 20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4,4 L4,24"
      stroke="#fff"
      strokeWidth="2"
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
  graphql(getMarkets),
  loadable,
  // @ts-ignore
)(MarketsList)
