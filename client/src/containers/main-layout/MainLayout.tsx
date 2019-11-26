import * as React from 'react'
import { Route } from 'react-router'
import { MarketSegment } from '../../__generated__/types'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { AppLayoutRoot, MainSearchContent } from '../../common/StyledComponents'
import { RouterHelpers } from '../../helpers'
import { Search, StockPrice } from '../index'
import AppBar from './AppBar'
import Footer from './Footer'

const MainLayout: React.FunctionComponent<IApolloContainerProps & { market: MarketSegment }> = ({ id, market }) => (
  <AppLayoutRoot>
    <AppBar />
    <div style={{ padding: '0rem 1rem' }}>
      <MainSearchContent>
        <Search id={id} url={market} market={market} />
        <StockPrice id={id} />
      </MainSearchContent>
    </div>
    {Object.keys(RouterHelpers.MainRouterItems).map(route => (
      <Route key={route} exact={true} path={route} component={RouterHelpers.RenderMainRouterElement} />
    ))}
    <Footer />
  </AppLayoutRoot>
)

export default MainLayout
