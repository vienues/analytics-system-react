import React from 'react';

import { Flex, Box } from 'rebass';
import { Text, Small } from '../../styleguide';
import Numeral from '../../components/Numeral';

const Markets = ({ data: { markets } }) => {
  return (
    <Flex align="center">
      {markets.map(({ id, change, changePercent, latestPrice }) => (
        <Flex key={id} pr={2} align="baseline">
          <Small caps bold color="white">
            {id}
          </Small>
          <Box pr={1} />
          <Numeral>{latestPrice}</Numeral>
          <Box pr={1} />
          <Text color={change < 0 ? 'bad' : 'good'}>
            <Numeral>{change}</Numeral>
            {' | '}
            <Numeral>{changePercent * 100}</Numeral>
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Markets;
