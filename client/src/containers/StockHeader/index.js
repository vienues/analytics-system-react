import { Divider, Text, Heading, Lead, RootBleed } from '../../styleguide';
import { Box, Flex } from 'rebass';
import React from 'react';
import { loadable } from '../../common/';
import wrapper from './stockHeaderQuery';

const StockHeader = ({id, data: {stock}}) => {
  const {company, quote} = stock;

  return (
    <RootBleed column px={[2, 3]} pt={2}>
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
    </RootBleed>
  )
}

export default wrapper(loadable(StockHeader));
