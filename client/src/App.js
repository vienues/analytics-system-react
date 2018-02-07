import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider as ResbassProvider } from 'rebass';

import StockDetails from './containers/StockDetails';

import client from './client';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ResbassProvider theme={theme}>
          <StockDetails />
        </ResbassProvider>
      </ApolloProvider>
    );
  }
}

export default App;
