import React, { Component } from 'react'
import * as BS from 'rebass'

import { STOCK } from './containers/StockDetails/data'

import StockDetails from './containers/StockDetails'

class App extends Component {
  render() {
    return (
      <BS.Provider theme={{ space: [0, 8, 16, 32, 48, 64, 128] }}>
        <StockDetails data={STOCK}/>
      </BS.Provider>
    )
  }
}

export default App
