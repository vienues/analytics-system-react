import React, { Fragment } from 'react';
import styled from 'styled-components';
import ArrowDownward from 'material-ui-icons/ArrowDownward';
import ArrowUpward from 'material-ui-icons/ArrowUpward';

import { Box, Flex, Small } from 'rebass';
import { colors, Text } from '../../styleguide';

export const QuickQuote = ({ data: { stock: { quote = {} } = {} } = {} }) => {
  const [Icon, color] = quote.change < 0 ? [ArrowDownward, 'bad'] : [ArrowUpward, 'good'];

  return (
    <Fragment>
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
    </Fragment>
  );
};

const SuperText = styled(Text)`
  &:after,
  &:before {
    display: inline-block;
    vertical-align: super;
    font-size: 1rem;
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
  <svg width="3" height="2rem" viewBox="0 0 3 32" xmlns="http://www.w3.org/2000/svg" style={{ margin: '.25rem .5rem' }}>
    <path
      d="M1,0 L1,32"
      stroke={colors[color]}
      strokeWidth="1.5"
      fill="none"
      fillRule="evenodd"
      opacity=".5"
      strokeLinecap="square"
    />
  </svg>
);

export default QuickQuote;
