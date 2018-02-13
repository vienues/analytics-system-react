import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider as ResbassProvider } from 'rebass'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import IEXClone from './containers/IEXClone'
import StockDetails from './containers/StockDetails'

import client from './client'
import theme from './theme'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ResbassProvider className="root" theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/stock/:id" component={({ match }) => <StockDetails id={match.params.id} />} />
              <Route exact path="/iex/:symbol" component={IEXClone} />
              <Redirect exact from="/" to="/stock/aapl" />
            </Switch>
          </BrowserRouter>
        </ResbassProvider>
      </ApolloProvider>
    )
  }
}

export default App
