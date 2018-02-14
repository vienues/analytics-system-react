import React from 'react';
import * as Rebass from 'rebass';
import styled, { css } from 'styled-components';
import { Flex, Box } from 'rebass';

import mapProps from '@evanrs/map-props';


export const ViewportRowPadding = styled(Box).attrs({ px: [1, 2, 3] })`
  min-width: 100vw;
  max-width: 100vw;
`

export const ViewportRowBody = styled(Box)`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`

export const ViewportRow = ({ className, ...props }) =>
  <ViewportRowPadding className={className}>
    <ViewportRowBody {...props}/>
  </ViewportRowPadding>

export const ViewportFlex = (props) => <ViewportRow {...props} is={Flex} />

export default ViewportRow
