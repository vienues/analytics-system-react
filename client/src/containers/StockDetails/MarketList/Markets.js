import wrapper from './marketDataQuery'
import React from 'react';
import { loadable } from './renderWhileLoading'

import { Flex, Box, Small } from 'rebass'

const Markets = ({data: {markets}}) => {
  return <Flex align="center">
    {markets.map(({id, name, lastUpdate}) => (
      <Flex key={id} column px={2} justify="space-around" >
        <Small caps>{name}</Small>
        <Small>
          {lastUpdate ? lastUpdate.change : '-'}
        </Small>
      </Flex>
    ))}
  </Flex>
};

export default wrapper(loadable(Markets))
