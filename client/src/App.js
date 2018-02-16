import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import apolloClient from './apollo/client';
import theme from './theme';

import MainLayout from './containers/MainLayout';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider className="root" theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={MainLayout} />
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
