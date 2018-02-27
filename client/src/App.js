import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import apolloClient from './apollo/client'
import News from './containers/News'
import History from './containers/History'
import Stats from './containers/Stats'
import Company from './containers/Company'
import theme from './theme'

import MainLayout from './layouts/browser/MainLayout'
import DesktopPanel from './layouts/desktop/DesktopPanel'
import MainToolBar from './layouts/desktop/MainToolBar'

const createDesktopRoute = (heading, Component) => ({ match }) => (
  <DesktopPanel heading={heading}>
    <Component id={match.params.id} />
  </DesktopPanel>
)

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider className="root" theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={MainLayout} />
              <Route exact path="/stock/:id" component={({ match }) => <MainLayout id={match.params.id} />} />
              <Route exact path="/news/:id" component={createDesktopRoute('Recent News', News)} />
              <Route exact path="/history/:id" component={createDesktopRoute('History', History)} />
              <Route exact path="/stats/:id" component={createDesktopRoute('Stats', Stats)} />
              <Route exact path="/company/:id" component={createDesktopRoute('Company', Company)} />

              <Route exact path="/search/:id" component={({ match }) => <MainToolBar id={match.params.id} />} />
              <Redirect exact from="/" to="/stock/aapl" />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default App
