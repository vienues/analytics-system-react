import React, { useContext, useMemo } from 'react'
import { Route } from 'react-router'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import {
  AppLayoutRoot,
  MainContent,
  MainLayoutWrapper,
  MainSearchContent,
  ScrollableArea,
  WrapperContent,
} from '../../common/StyledComponents'
import { RouterHelpers } from '../../helpers'
import { MarketSegment } from '../../__generated__/types'
import { Search, StockPrice } from '../index'
import { SearchContext, SearchContextProvider } from '../search/SearchContext'
import AppBar from './AppBar'
import Footer from './Footer'

const CurrentSymbolLayout: React.FunctionComponent<IApolloContainerProps & { market: MarketSegment }> = ({
  id,
  market,
}) => {
  const { currentSymbol, errorMessage } = useContext(SearchContext)

  const renderedErrorMessage: JSX.Element | null = useMemo(() => {
    if (!(currentSymbol && currentSymbol.id) && id) {
      return (
        <ScrollableArea>
          <MainContent>
            <span>{errorMessage}</span>
          </MainContent>
        </ScrollableArea>
      )
    }
    return null
  }, [currentSymbol, errorMessage, id])

  const renderedRoutes = useMemo(() => {
    console.log(Object.keys(RouterHelpers.MainRouterItems))
    return Object.keys(RouterHelpers.MainRouterItems).map((route) => (
      <Route key={route} exact={true} path={route} component={RouterHelpers.RenderMainRouterElement} />
    ))
  }, [])

  return (
    <WrapperContent>
      <MainSearchContent>
        <Search id={id} url={market} market={market} />
        <StockPrice id={id} market={market} />
      </MainSearchContent>
      {renderedErrorMessage || renderedRoutes}
      <Footer />
    </WrapperContent>
  )
}

const MainLayout: React.FunctionComponent<IApolloContainerProps & { market: MarketSegment }> = (props) => {
  return (
    <MainLayoutWrapper>
      <AppBar />
      <AppLayoutRoot>
        <SearchContextProvider>
          <CurrentSymbolLayout {...props} />
        </SearchContextProvider>
      </AppLayoutRoot>
    </MainLayoutWrapper>
  )
}

export default MainLayout
