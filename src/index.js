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
import '@blueprintjs/core/dist/blueprint.css'

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })
const client = new ApolloClient({
  link: httpLink,
  connectToDevTools: true,
  cache: new InMemoryCache()
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
