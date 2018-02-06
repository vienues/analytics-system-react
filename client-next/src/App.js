import React, { Component } from 'react'
import { Provider as ResbassThemeProvider } from 'rebass'

import StockDetails from './containers/StockDetails'

import { STOCK } from './containers/StockDetails/data'
const THEME = { space: [0, 8, 16, 32, 48, 64, 128] }

class App extends Component {
  render() {
    return (
      <ResbassThemeProvider theme={THEME}>
        <StockDetails data={STOCK} />
      </ResbassThemeProvider>
    )
  }
}

export default App
