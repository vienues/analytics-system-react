import React from 'react';

import { Root } from '../styleguide/index';
import AppBar from '../components/AppBar';

export default ({ children }) => (
  <Root column flex={1}>
    <AppBar />
    {children}
  </Root>
);
