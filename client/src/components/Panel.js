import React from 'react';

import { Divider, Heading } from 'styleguide';
import { Box } from 'rebass';

export const Panel = props => <Box pt={2} {...props} />;

export const PanelHeading = ({ children, mt, mb }) => [
  <Heading key="heading" mt={mt} f={1} caps color="accent" bold>
    {children}
  </Heading>,
  <Divider key="divider" my={1} mb={mb} />,
];
