import React from 'react';
import { Box, Flex } from 'rebass';

import { Divider, Text, Heading, Lead, ViewportRow } from '../../styleguide';

export const StockHeader = ({id, data: {loading, stock}}) => {
  const {company = {}, quote = {}} = stock || {};

  return (
    <Flex column w={1}>
      <Lead is="div" f={5} color="offwhite">
        <Flex>
          {company.name}
          <Text display="inline" color="offwhite50" pl={2}>
            ({id.toUpperCase()})
          </Text>
          <Heading color="secondary"/>
          <Box flex={1}/>
          <Text pr={2}>{quote.latestPrice} </Text>
          <Text is="div" color={quote.change < 0 ? 'red' : 'green7'}>
            {quote.change != null ? quote.change.toFixed(2) : ''}
            {quote.change != null &&
            quote.changePercent != null && (
              <Text color="gray8" display="inline" px={1}>
                |
              </Text>
            )}
            {quote.changePercent != null ? quote.changePercent.toFixed(2) * 100 + '%' : ''}
          </Text>
        </Flex>
      </Lead>
      <Divider my={1}/>
    </Flex>
  )
}

export default StockHeader
