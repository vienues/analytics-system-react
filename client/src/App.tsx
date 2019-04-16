// import { selectionConnector } from './openfin'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom'

import { ThemeProvider } from './rt-theme/ThemeContext'
import GlobalStyle from './rt-theme/globals'

import apolloClient from './apollo/client'
import News from './containers/News'
import History from './containers/History'
import Stats from './containers/Stats'
import Company from './containers/Company'

import MainLayout from './layouts/browser/MainLayout'
import DesktopPanel from './layouts/desktop/DesktopPanel'
import Search from './containers/Search'
import { Background } from './styleguide'

const createDesktopRoute = (heading: string, comp: JSX.Element) => {
  // const Component = selectionConnector(comp)
  return () => {
    return (
      <DesktopPanel heading={heading}>
        <React.Component />
      </DesktopPanel>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />
        <ThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={MainLayout} />
              <Route
                exact
                path="/stock/:id"
                component={({ match }: RouteComponentProps<{ id: string }>) => <MainLayout id={match.params.id} />}
              />
              <Route
                exact
                path="/news/:id?"
                component={createDesktopRoute('Recent News', (News as unknown) as JSX.Element)}
              />
              <Route
                exact
                path="/history/:id?"
                component={createDesktopRoute('History', (History as unknown) as JSX.Element)}
              />
              <Route
                exact
                path="/stats/:id?"
                component={createDesktopRoute('Stats', (Stats as unknown) as JSX.Element)}
              />
              <Route
                exact
                path="/company/:id?"
                component={createDesktopRoute('Company', (Company as unknown) as JSX.Element)}
              />
              <Route
                exact
                path="/search/:id"
                component={({ match }: RouteComponentProps<{ id: string }>) => (
                  <DesktopPanel id={match.params.id} bg={false} heading={'Search'}>
                    <Background>
                      <Search id={match.params.id} url={/search/} />
                    </Background>
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
