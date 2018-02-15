import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainLayout from './containers/MainLayout';

import client from './client';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider className="root" theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/stock/:id" component={({ match }) => <MainLayout id={match.params.id} />} />
              <Redirect exact from="/" to="/stock/aapl" />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
