import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { NavLink } from 'react-router-dom';

import logoSVGURL from '../../assets/logo.svg';
import { ViewportRowPadding, ViewportRowBody, textProps } from 'styleguide';
import { theme } from '../../theme';

const AppBar = () => (
  <ViewportRowPadding>
    <Body>
      <Logo />
      <Box flex="1" />
      <Link to="/stock">Quotes</Link>
      <Link to="/markets">Markets</Link>
      <Link to="/watchlists">Watchlists</Link>
    </Body>
  </ViewportRowPadding>
);

const Link = styled(NavLink)`
  ${textProps({ weight: 'normal', caps: true })};

  display: flex;
  align-items: center;
  color: ${theme.colors.white};
  border-radius: 0.25rem;
  min-height: 2rem;
  padding: 0 0.5rem;

  font-size: 1rem;
  line-height: 1rem;

  vertical-align: center;
  margin-left: 1rem;

  &.active {
    background-color: ${theme.colors.accent50a};
  }
`;

const Body = styled(ViewportRowBody)`
  display: flex;
  align-items: center;
  min-height: 6rem;
  max-height: 6rem;
`;

const Logo = styled(NavLink).attrs({ to: '/' })`
  display: block;
  min-height: 2rem;
  max-height: 2rem;
  min-width: 10rem;
  background-size: contain;
  background-position: center left;
  background-image: url(${logoSVGURL});
`;

export default AppBar;
