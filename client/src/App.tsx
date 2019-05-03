import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'
import apolloClient from './apollo/client'
import { Company, History, News, Search, Stats } from './containers/'
import GlobalScrollbarStyle from './layouts/GlobalScrollbarStyle'
import MainLayout from './layouts/MainLayout'
import GlobalStyle from './rt-theme/globals'
import { ThemeProvider } from './rt-theme/ThemeContext'

class App extends React.Component {
  constructor(props: any) {
    super(props)
    this.renderMainLayout = this.renderMainLayout.bind(this)
    this.renderSearchLayout = this.renderSearchLayout.bind(this)
    this.renderStatsLayout = this.renderStatsLayout.bind(this)
  }

  public renderMainLayout(e: RouteComponentProps): JSX.Element {
    return <MainLayout id={(e.match.params as any).id} />
  }

  public renderStatsLayout(e: RouteComponentProps): JSX.Element {
    return <Stats id={(e.match.params as any).id} />
  }

  public renderSearchLayout(e: RouteComponentProps): JSX.Element {
    return <Search id={(e.match.params as any).id} url={/search/} />
  }

  public render() {
    return (
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />
        <ThemeProvider>
          <GlobalScrollbarStyle />
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={MainLayout} />
              <Route exact={true} path="/stock/:id" component={this.renderMainLayout} />
              <Route exact={true} path="/news/:id?" component={News} />
              <Route exact={true} path="/history/:id?" component={History} />
              <Route exact={true} path="/stats/:id?" component={this.renderStatsLayout} />
              <Route exact={true} path="/company/:id?" component={Company} />
              <Route exact={true} path="/search/:id" component={this.renderSearchLayout} />
              <Redirect exact={true} from="/" to="/stock/aapl" />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default App
