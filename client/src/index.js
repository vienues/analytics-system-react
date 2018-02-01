import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css'
import 'flexboxgrid'
import { WebSocketLink } from 'apollo-link-ws';


const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/subscriptions`,
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })


const client = new ApolloClient({
  link: wsLink,
  connectToDevTools: true,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
