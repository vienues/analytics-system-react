import React from 'react';
import { Box, Flex } from 'rebass';

import { Divider, Text, Lead } from '../../styleguide';

import QuickQuote from '../QuickQuote';

export const StockHeader = ({ id, data: { loading, stock } }) => {
  const { company = {}, quote = {} } = stock || {};

  return (
    <Flex column w={1}>
      <Lead is="div" f={5} color="offwhite">
        <Flex>
          {company.name}
          <Text display="inline" color="offwhite50" pl={2}>
            ({id.toUpperCase()})
          </Text>
          <Box flex={1} />
          {/*<QuickQuote id={id} />*/}
        </Flex>
      </Lead>
      <Divider my={1} />
    </Flex>
  );
};

export default StockHeader;
