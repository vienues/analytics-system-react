import React, { Component } from 'react'
import styled from 'styled-components'
import MainNavigation from './components/MainNavigation'
import StockView from "./components/StockView"


const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export class App extends Component {
  render() {
    return (
      <Root>
        <MainNavigation/>
        <StockView/>
      </Root>
    );
  }
}

export default App;
