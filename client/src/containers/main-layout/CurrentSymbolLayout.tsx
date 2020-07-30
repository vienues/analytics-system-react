import React, { useContext, useMemo } from 'react'
import { Route } from 'react-router'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import {
  MainContent,
  MainSearchContent,
  ScrollableArea,
  SearchGridArea,
  WrapperContent,
} from '../../common/StyledComponents'
import { RouterHelpers } from '../../helpers'
import { Search, StockPrice } from '../index'
import { SearchContext } from '../search/SearchContext'
import Footer from './Footer'
import { MarketSegment } from 'containers/global-types'

export const CurrentSymbolLayout: React.FunctionComponent<IApolloContainerProps & { market: MarketSegment }> = ({
  id,
  market,
}) => {
  const { currentSymbol, errorMessage, previousSearch } = useContext(SearchContext)

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
    return Object.keys(RouterHelpers.MainRouterItems).map(route => (
      <Route key={route} exact={true} path={route} component={RouterHelpers.RenderMainRouterElement} />
    ))
  }, [])

  return (
    <WrapperContent>
      <MainSearchContent hasPreviousSearch={previousSearch ?? false}>
        <SearchGridArea>
          <Search id={id} url={market} market={market} />
          {currentSymbol && <StockPrice id={id} market={market} />}
        </SearchGridArea>
      </MainSearchContent>
      {renderedErrorMessage || renderedRoutes}
      <Footer hasNoSearch={!currentSymbol} />
    </WrapperContent>
  )
}
