import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass'

import logoSVGURL from '../assets/logo.svg'
import { BlockLink } from '../styleguide'
import { ViewportRowPadding, ViewportRowBody } from '../styleguide/ViewportRow'

const AppBar = (props) => (
  <ViewportRowPadding>
    <Body>
      <Logo/>
      <Box flex="1"/>

    </Body>
  </ViewportRowPadding>
);

const Body = styled(ViewportRowBody)`
  display: flex;
  align-items: center;
  min-height: 6rem;
  max-height: 6rem;
`

const Logo = styled.div`
  min-height: 2rem;
  max-height: 2rem;
  min-width: 10rem;
  background-size: contain;
  background-position: center left;
  background-image: url(${logoSVGURL});
`

export default AppBar;
