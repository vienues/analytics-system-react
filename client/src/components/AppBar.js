import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import mapProps from '@evanrs/map-props'


import logoSVGURL from '../assets/logo.svg'
import { ViewportFlex } from '../styleguide'

const AppBar = (props) => (
  <ViewportFlex>
    <Logo/>
  </ViewportFlex>
);

AppBar.propTypes = {

};

const Logo = styled.div`
  min-height: 3rem;
  max-height: 3rem;
  min-width: 10rem;
  background-size: contain;
  background-position: center left;
  background-image: url(${logoSVGURL});
`

export default AppBar;
