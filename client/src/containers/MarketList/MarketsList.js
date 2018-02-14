import wrapper from './marketDataQuery';
import React from 'react';
import { loadable } from '../../common/';

import { Flex, Small } from 'rebass'

const Markets = ({data: {markets}}) => {
  return <Flex align="center">
    {markets.map(({id, name, lastUpdate}) => (
      <Flex key={id} px={2} align="baseline" >
        <Small caps bold>{name}</Small>
        &nbsp;&nbsp;{lastUpdate ? lastUpdate.change : '-'}
      </Flex>
    ))}
  </Flex>
};


export default wrapper(loadable(Markets));
