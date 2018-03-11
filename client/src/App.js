import { selectionConnector } from 'openfin'
import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import apolloClient from './apollo/client'
import News from './containers/News'
import History from './containers/History'
import Stats from './containers/Stats'
import Company from './containers/Company'
import theme from './styleguide/theme'

import MainLayout from './layouts/browser/MainLayout'
import DesktopPanel from './layouts/desktop/DesktopPanel'
import Search from './containers/Search'

const createDesktopRoute = (heading, comp) => {
  const Component = selectionConnector(comp)
  return () => {
    return (
      <DesktopPanel heading={heading}>
        <Component />
      </DesktopPanel>
    )
  }
}

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider className="root" theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={MainLayout} />
              <Route exact path="/stock/:id" component={({ match }) => <MainLayout id={match.params.id} />} />
              <Route exact path="/news/:id?" component={createDesktopRoute('Recent News', News)} />
              <Route exact path="/history/:id?" component={createDesktopRoute('History', History)} />
              <Route exact path="/stats/:id?" component={createDesktopRoute('Stats', Stats)} />
              <Route exact path="/company/:id?" component={createDesktopRoute('Company', Company)} />
              <Route
                exact
                path="/search/:id"
                component={({ match }) => (
                  <DesktopPanel id={match.params.id} heading={'Search'}>
                    <Search id={match.params.id} url={/search/} />
                  </DesktopPanel>
                )}
              />
              <Redirect exact from="/" to="/stock/aapl" />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default App
