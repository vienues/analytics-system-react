import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb as farLightBulb } from '@fortawesome/free-regular-svg-icons'
import { faLightbulb as fasLightBulb } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, RouteComponentProps, Switch } from 'react-router-dom'
import apolloClient from './apollo/client'
import GlobalScrollbarStyle from './common/GlobalScrollbarStyle'
import { Company, History, MainLayout, News, Peers, Search, Stats } from './containers/'
import { OpenfinApiProvider } from './openfin/OpenfinService'
import { styled } from './rt-theme'
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

/** Rather than lambda or binding individual generators in the Route we will generate them from object */
const routerItems: IComponentWithProps = {
  '/': { component: MainLayout },
  '/(bond|crypto|currency|future|index|stock)/:id?': { component: MainLayout },
  '/company/:id?': { component: Company },
  '/history/:id?': { component: History },
  '/news/:id?': { component: News },
  '/peers/:id?': { component: Peers },
  '/search/:id?': { component: Search, props: { url: /search/ } },
  '/stats/:id?': { component: Stats },
}

const App = () => {
  const renderRouterElement = (e: RouteComponentProps): JSX.Element => {
    const element = routerItems[e.match.path]
    const param0 = e.match.params[0] || 'stock'
    return React.createElement(element.component, {
      ...element.props,
      id: (e.match.params as any).id,
      market: param0,
    })
  }

  return (
    <OpenfinApiProvider>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <ThemeProvider>
          <GlobalScrollbarStyle />
          <ParentContainer>
            <BrowserRouter>
              <Switch>
                {Object.keys(routerItems).map(route => (
                  <Route key={route} exact={true} path={route} component={renderRouterElement} />
                ))}
              </Switch>
            </BrowserRouter>
          </ParentContainer>
        </ThemeProvider>
      </ApolloProvider>
    </OpenfinApiProvider>
  )
}

const ParentContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;

  background-color: ${({ theme }) => theme.core.darkBackground};
  color: ${({ theme }) => theme.core.textColor};
`

export default App
