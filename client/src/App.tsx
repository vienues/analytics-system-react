import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb as farLightBulb } from '@fortawesome/free-regular-svg-icons'
import { faLightbulb as fasLightBulb } from '@fortawesome/free-solid-svg-icons'
import { Fdc3ContextProvider } from 'containers/fdc3/fdc3-context'
import { Context } from 'openfin-fdc3'
import React, { useEffect, useState } from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import apolloClient from './apollo/client'
import GlobalScrollbarStyle from './common/GlobalScrollbarStyle'
import { RouterHelpers } from './helpers'
import { OpenfinApiProvider } from './openfin/OpenfinService'
import { styled } from './rt-theme'
import GlobalStyle from './rt-theme/globals'
import { ThemeProvider } from './rt-theme/ThemeContext'
library.add(fasLightBulb, farLightBulb)

const App = () => {
  const [currencyPairContext, setCurrencyPairContext] = useState({} as Context)

  useEffect(() => {
    if (typeof fin === 'undefined') {
      return
    }
    const fdc3 = require('openfin-fdc3')
    fdc3.addContextListener((context: Context) => {
      setCurrencyPairContext(context)
    })
  }, [currencyPairContext])

  return (
    <OpenfinApiProvider>
      <Fdc3ContextProvider value={currencyPairContext}>
        <ApolloProvider client={apolloClient}>
          <GlobalStyle />
          <ThemeProvider>
            <GlobalScrollbarStyle />
            <ParentContainer>
              <BrowserRouter>
                <Switch>
                  {Object.keys(RouterHelpers.RootRouterItems).map(route => (
                    <Route key={route} exact={true} path={route} component={RouterHelpers.RenderRootRouterElement} />
                  ))}
                </Switch>
              </BrowserRouter>
            </ParentContainer>
          </ThemeProvider>
        </ApolloProvider>
      </Fdc3ContextProvider>
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
