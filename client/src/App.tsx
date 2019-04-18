import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'
import apolloClient from './apollo/client'
import { Company, History, News, Search, Stats } from './containers/'
import MainLayout from './layouts/browser/MainLayout'
import DesktopPanel from './layouts/desktop/DesktopPanel'
import GlobalScrollbarStyle from './layouts/GlobalScrollbarStyle'
import { selectionConnector } from './openfin'
import GlobalStyle from './rt-theme/globals'
import { ThemeProvider } from './rt-theme/ThemeContext'
import { Background } from './styleguide'

const createDesktopRoute = (heading: string, comp: JSX.Element) => {
  // @ts-ignore
  const Component = selectionConnector(comp)
  return () => {
    return (
      <DesktopPanel heading={heading}>
        <Component />
      </DesktopPanel>
    )
  }
}

class App extends React.Component {
  constructor(props: any) {
    super(props)
    this.renderMainLayout = this.renderMainLayout.bind(this)
    this.renderSearchLayout = this.renderSearchLayout.bind(this)
  }

  public renderMainLayout(e: RouteComponentProps): JSX.Element {
    return <MainLayout id={(e.match.params as any).id} />
  }

  public renderSearchLayout(e: RouteComponentProps): JSX.Element {
    return (
      <DesktopPanel id={(e.match.params as any).id} bg={false} heading={'Search'}>
        <Background>
          <Search id={(e.match.params as any).id} url={/search/} />
        </Background>
      </DesktopPanel>
    )
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
              <Route
                exact={true}
                path="/news/:id?"
                component={createDesktopRoute('Recent News', (News as unknown) as JSX.Element)}
              />
              <Route
                exact={true}
                path="/history/:id?"
                component={createDesktopRoute('History', (History as unknown) as JSX.Element)}
              />
              <Route
                exact={true}
                path="/stats/:id?"
                component={createDesktopRoute('Stats', (Stats as unknown) as JSX.Element)}
              />
              <Route
                exact={true}
                path="/company/:id?"
                component={createDesktopRoute('Company', (Company as unknown) as JSX.Element)}
              />
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
