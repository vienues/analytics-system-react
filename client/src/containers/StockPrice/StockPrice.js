import React from 'react';
import styled from 'styled-components';
import ArrowDownward from 'material-ui-icons/ArrowDownward';
import ArrowUpward from 'material-ui-icons/ArrowUpward';

import { Flex, Box } from 'rebass';
import { colors, Text } from '../../styleguide/index';

export const StockPrice = ({ data: { stock: { quote } } }) => {
  const [Icon, color] = quote.change < 0 ? [ArrowDownward, 'bad'] : [ArrowUpward, 'good'];

  return (
    <Flex flex="none" align="flex-start">
      <Currency>{quote.latestPrice}</Currency>
      <Box px={1} />
      <Text color={color}>
        <Icon
          fontSize
          viewBox="0 0 20 20"
          style={{ verticalAlign: 'super', fontSize: '1rem', marginRight: '0.25rem' }}
        />
        {quote.change.toFixed(2)}
      </Text>
      <VerticalRule color={color} />
      <Percent color={color}>{quote.changePercent.toFixed(2) * 100}</Percent>
    </Flex>
  );
};

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
`;

const Currency = styled(SuperText)`
  &:before {
    content: '$';
    padding-right: 0.25rem;
  }
`;

const Percent = styled(SuperText)`
  &:after {
    content: '%';
    padding-left: 0.125rem;
  }
`;

const VerticalRule = ({ color }) => (
  <svg width="20" height="32" viewBox="0 0 20 32" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.25,0 L9.25,32"
      stroke={colors[color]}
      strokeWidth="1.5"
      fill="none"
      fillRule="evenodd"
      opacity=".5"
      strokeLinecap="square"
    />
  </svg>
);

export default StockPrice;
