import React, { Fragment } from 'react';
import { Box, Measure, Flex } from 'rebass';
import { Lead, BlockLink } from '../../styleguide';

const URL = /(https?\:\/\/)?(www\.)?/;

export const Company = props => {
  const { company, peers } = props.data.stock;

  return (
    <Box flex={1}>
      <Lead mt={2} f={3} color="offwhite50">
        {company.name} ({company.symbol})
      </Lead>
      <Measure mt={1} f={1} color="offwhite">
        {company.description}
      </Measure>
      <BlockLink target="_blank" href={company.website} f={1} color="accent" mt={1} fontStyle="italic">
        {company.website.replace(URL, '')}
      </BlockLink>
      {peers.length > 0 && (
        <Fragment>
          <Lead f={3} mt={2} color="offwhite50">
            Top Peers
          </Lead>
          <Flex mt={1} color="accent">
            {peers.map(symbol => (
              <BlockLink key={symbol} href={`/stock/${symbol}`} pr={1}>
                {symbol}
              </BlockLink>
            ))}
          </Flex>
        </Fragment>
      )}
    </Box>
  );
};
export default Company;
