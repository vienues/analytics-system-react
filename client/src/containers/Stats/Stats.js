import gql from 'graphql-tag';
import React from 'react';
import { Box, Flex } from 'rebass';
import { Divider } from '../../styleguide';

import formatFields from './formatFields';

const StockStats = props => {
  let { stats, quote } = props.data.stock;
  quote = formatFields(quote);
  stats = formatFields(stats);

  return (
    <Flex flex={1} wrap={false}>
      <Flex w={[1, 1 / 2]} column>
        <FieldRow label="Previous Close">{quote.previousClose}</FieldRow>
        <FieldRow label="Day Range">
          $ {quote.low} - {quote.high}
        </FieldRow>
        <FieldRow label="Volume">{quote.latestVolume}</FieldRow>
        <FieldRow label="Market Cap">{stats.marketcap}</FieldRow>
        <FieldRow label="P/E Ratio">{stats.peRatioHigh}</FieldRow>
      </Flex>
      <Box p={2} />
      <Flex w={[1, 1 / 2]} column>
        <FieldRow label="Open">{quote.open}</FieldRow>
        <FieldRow label="52 Week Range">
          $ {stats.week52low} - {stats.week52high}
        </FieldRow>
        <FieldRow label="Total Avg. Volume">{quote.avgTotalVolume}</FieldRow>
        <FieldRow label="Earnings Per Share">{stats.latestEPS}</FieldRow>
        <FieldRow label="Dividend Yield">{stats.dividendYield}</FieldRow>
      </Flex>
    </Flex>
  );
};

const FieldRow = ({ label, children }) => {
  return (
    <Flex flex={1} wrap pt={1}>
      <Flex flex={['1 100%', 'auto']} f={1} color="offwhite50">
        {label}
      </Flex>
      <Flex flex="0 50% 0" f={2} color="offwhite">
        {children}
      </Flex>
      <Divider color="primary50a" borderWidth={1} my={1} />
    </Flex>
  );
};

StockStats.fragment = gql`
  fragment Stats on Stock {
    stats {
      marketcap
      peRatioLow
      peRatioHigh
      week52low
      week52high
      latestEPS
      dividendRate
      dividendYield
    }
    quote {
      id
      low
      high
      open
      previousClose
      latestVolume
      avgTotalVolume
    }
  }
`;

export default StockStats;
