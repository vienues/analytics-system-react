import React from 'react';
import { Box, Flex } from 'rebass';
import { Text, Divider } from '../../styleguide';

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
    <Flex flex={1} column>
      <Flex flex={1} my={1}>
        <Box flex={1}>
          <Text f={0} color="offwhite50" weight={300}>
            {label}
          </Text>
        </Box>
        <Box>
          <Text f={1} color="offwhite">
            {children}
          </Text>
        </Box>
      </Flex>
      <Divider color="gray9" borderWidth={1} my={0} />
    </Flex>
  );
};

export default StockStats;
