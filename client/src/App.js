import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider as ResbassProvider } from 'rebass';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import StockDetails from './containers/StockDetails';

import client from './client';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ResbassProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/stock/:symbol" component={StockDetails} />
              <Redirect exact from="/" to="/stock/aapl"/>
            </Switch>
          </BrowserRouter>
        </ResbassProvider>
      </ApolloProvider>
    );
  }
}

export default App;
