import React, { Fragment } from 'react';
import { Flex, Box } from 'rebass';
import Search from 'material-ui-icons/Search';

import { Divider, Text, Lead, ViewportFlex } from '../../styleguide';
import AppLayout from '../AppLayout';
import SearchSelect from './Select';

export default ({ data: { loading, reference = {} } = {} }) => {
  return (
    <AppLayout>
      <ViewportFlex column>
        <Flex>
          <Lead is="div" f={5} color="offwhite">
            <Flex align="center">
              <Flex mr={1} color="accent">
                <Search fontSize />
              </Flex>
            </Flex>
          </Lead>

          <Box flex="1">
            <SearchSelect symbols={reference.symbols} valueComponent={CompanyName} />
          </Box>
        </Flex>
        <Divider my={1} />
      </ViewportFlex>
    </AppLayout>
  );
};

export const CompanyName = ({ value, ...props }) =>
  console.log(value, props) || (
    <Fragment>
      {value.name}
      {value.id && (
        <Text display="inline" color="offwhite50" pl={2}>
          ({value.id.toUpperCase()})
        </Text>
      )}
    </Fragment>
  );
