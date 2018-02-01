import React, { Component } from 'react'
import AppHeader from './components/AppHeader'
import StockView from './components/StockView'

export default class App extends Component {
  render() {
    return (
      <div className='main-layout'>
        <AppHeader/>
        <StockView/>
      </div>
    );
  }
}
