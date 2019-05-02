import * as React from 'react'
import styled from 'styled-components'
import { Search, StockPrice } from '../../containers/'
import { Gutter } from '../../styleguide'
import AppBar from './AppBar'
import Footer from './Footer'

import { Company, History, News, Peers, Stats } from '../../containers/'

export interface IProps {
  id: string
}

export const MainLayout: React.FunctionComponent<IProps> = ({ id }) => (
  <React.StrictMode>
    <AppLayoutRoot>
      <AppBar />
      <ScrollableArea>
        <MainContent>
          <Search gridArea="search" url={/stock/} id={id} />
          <StockPrice gridArea="stockprice" id={id} />
          <History gridArea="history" id={id} />
          <News gridArea="news" id={id} />
          <Stats gridArea="stats" id={id} />
          <Company gridArea="company" id={id} />
          <Peers gridArea="peers" id={id} />
        </MainContent>
        <Gutter />
      </ScrollableArea>
      <Footer />
    </AppLayoutRoot>
  </React.StrictMode>
)
const MainContent = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 4fr minmax(30rem, 1fr);
  grid-template-areas:
    'search stockprice'
    'history news'
    'stats company'
    'stats peers';
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'search'
      'stockprice'
      'history'
      'stats'
      'news'
      'company'
      'peers';
  }
`

const AppLayoutRoot = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: ${({ theme }) => theme.core.darkBackground};
  color: ${({ theme }) => theme.core.textColor};
`

const ScrollableArea = styled.div`
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
  padding: 1rem;
`

export default MainLayout
