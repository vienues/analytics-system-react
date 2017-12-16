import * as React from "react";
import styled from 'styled-components'

const MainNavigation = styled.nav`
  height: 100px;
  width: 100%;
  background-color: white;

  display: flex;
  align-items: center;
`
export default () => (<MainNavigation className='main-navigation'>
  <img src="/adaptive_logo.png"/>
  <p>GraphQL stock tracker</p>
</MainNavigation>)