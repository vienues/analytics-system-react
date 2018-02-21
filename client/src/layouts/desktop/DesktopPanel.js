import React from 'react';
import { Panel, PanelHeading } from '../../components/index';

import { Root } from '../../styleguide/index';

export default ({ heading, children }) => (
  <Root column flex={1} px={3}>
    <Panel width={[1]}>
      <PanelHeading>{heading}</PanelHeading>
      {children}
    </Panel>
  </Root>
);
