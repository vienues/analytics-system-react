import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb as farLightBulb } from '@fortawesome/free-regular-svg-icons'
import { faLightbulb as fasLightBulb } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, RouteComponentProps, Switch } from 'react-router-dom'
import apolloClient from './apollo/client'
import GlobalScrollbarStyle from './common/GlobalScrollbarStyle'
import { Company, History, MainLayout, News, Peers, Search, Stats } from './containers/'
import GlobalStyle from './rt-theme/globals'
import { ThemeProvider } from './rt-theme/ThemeContext'

library.add(fasLightBulb, farLightBulb)

interface IComponentWithProps {
  [path: string]: {
    component: React.ElementType
    props?: {
      [key: string]: any
    }
  }
}

class App extends React.Component {
  /** Rather than lambda or binding individual generators in the Route we will generate them from object */
  private static routerItems: IComponentWithProps = {
    '/': { component: MainLayout },
    '/company/:id?': { component: Company },
    '/history/:id?': { component: History },
    '/news/:id?': { component: News },
    '/peers/:id?': { component: Peers },
    '/search/:id?': { component: Search, props: { url: /search/ } },
    '/stats/:id?': { component: Stats },
    '/stock/:id': { component: MainLayout },
  }

  constructor(props: any) {
    super(props)
    this.renderRouterElement = this.renderRouterElement.bind(this)
  }

  public renderRouterElement(e: RouteComponentProps): JSX.Element {
    const element = App.routerItems[e.match.path]
    return React.createElement(element.component, { ...element.props, id: (e.match.params as any).id })
  }

  public render() {
    return (
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <ThemeProvider>
          <GlobalScrollbarStyle />
          <BrowserRouter>
            <Switch>
              {Object.keys(App.routerItems).map(route => (
                <Route key={route} exact={true} path={route} component={this.renderRouterElement} />
              ))}
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default App
