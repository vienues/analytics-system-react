import * as React from 'react'
import styled from 'styled-components'
import { Company, History, News, Peers, Search, Stats, StockPrice } from '../containers/'
import { Gutter } from '../styleguide'
import AppBar from './AppBar'
import Footer from './Footer'

export interface IProps {
  id: string
}

export const MainLayout: React.FunctionComponent<IProps> = ({ id }) => (
  <React.StrictMode>
    <AppLayoutRoot>
      <AppBar />
      <MainSearchContent>
        <Search url={/stock/} id={id} />
        <StockPrice id={id} />
      </MainSearchContent>
      <ScrollableArea>
        <MainContent>
          <MainInnerContent>
            <History id={id} />
            <Stats id={id} />
          </MainInnerContent>
          <MainInnerContent>
            <News id={id} />
            <Company id={id} />
            <Peers id={id} />
          </MainInnerContent>
        </MainContent>
        <Gutter />
      </ScrollableArea>
      <Footer />
    </AppLayoutRoot>
  </React.StrictMode>
)

const ContentBase = styled.div`
  display: grid;
  grid-gap: 1em;
`

const MainContent = styled(ContentBase)`
  grid-template-columns: 4fr minmax(30rem, 1fr);
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`
const MainInnerContent = styled(ContentBase)`
  align-content: start;
`

const MainSearchContent = styled(ContentBase)`
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  border-bottom: solid grey 1px;
  padding: 5px @media (max-width: 700px) {
    grid-auto-flow: row;
  }
`

const AppLayoutRoot = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-rows: auto auto 1fr auto;
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
