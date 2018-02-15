import React from 'react';
import { Box, Measure, Flex } from 'rebass';
import { Lead, BlockLink } from '../../styleguide';

export const Company = props => {
  const { company, peers } = props.data.stock;

  return (
    <Box flex={1}>
      <Lead f={3} my={2} color="offwhite50">
        {company.name} ({company.symbol})
      </Lead>
      <Measure f={0} color="offwhite">
        {company.description}
      </Measure>
      <BlockLink target="_blank" href={company.website} f={0} color="accent" my={2} />
      <Measure f={0} color="offwhite" my={1}>
        Top Peers
      </Measure>
      <Flex>
        {peers.map(symbol => (
          <BlockLink key={symbol} href={`/stock/${symbol}`} pr={1}>
            {symbol}
          </BlockLink>
        ))}
      </Flex>
    </Box>
  );
};
export default Company;
