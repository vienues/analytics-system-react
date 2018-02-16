import React from 'react';
import connector from './connector';
import { loadable } from '../../common/';

import { Flex, Box, Small } from 'rebass';

const Markets = ({ data: { markets } }) => {
  return (
    <Flex align="center">
      {markets.map(({ id, change, changePercent, latestPrice }) => (
        <Flex key={id} pr={3} align="baseline">
          <Small caps bold>
            {id}
          </Small>
          <Box p={1} />
          {`${latestPrice}  ${change}|${changePercent}`}
        </Flex>
      ))}
    </Flex>
  );
};

export default connector(loadable(Markets));
