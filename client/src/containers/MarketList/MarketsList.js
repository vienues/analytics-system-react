import React from 'react';
import connect from './marketDataQuery';
import { loadable } from '../../common/';

import { Flex, Box, Small } from 'rebass';

const Markets = ({ data: { markets } }) => {
  return (
    <Flex align="center">
      {markets.map(({ id, name, lastUpdate }) => (
        <Flex key={id} pr={3} align="baseline">
          <Small caps bold>
            {name}
          </Small>
          <Box p={1} />
          {lastUpdate ? lastUpdate.change : '-'}
        </Flex>
      ))}
    </Flex>
  );
};

export default connect(loadable(Markets));
