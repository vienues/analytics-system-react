import * as React from 'react'
import styled from 'styled-components'
import { IApolloContainerProps } from '../../common/IApolloContainerProps'
import { Company, History, News, Peers, Search, Stats, StockPrice } from '../index'
import AppBar from './AppBar'
import Footer from './Footer'

const MainLayout: React.FunctionComponent<IApolloContainerProps> = ({ id }) => (
  <AppLayoutRoot>
    <AppBar />
    <MainSearchContent>
      <Search id={id} url={/stock/} />
      <StockPrice id={id} />
    </MainSearchContent>
    {id ? (
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
      </ScrollableArea>
    ) : (
      <div />
    )}
    <Footer />
  </AppLayoutRoot>
)

const ContentBase = styled.div`
  display: grid;
  grid-gap: 1em;
`

const MainContent = styled(ContentBase)`
  grid-template-columns: 9fr 4fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
const MainInnerContent = styled(ContentBase)`
  align-content: start;
`

const MainSearchContent = styled(ContentBase)`
  font-size: 2rem;
  line-height: 2rem;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 1rem;
  position: relative;
  @media (max-width: 900px) {
    font-size: 1rem;
    line-height: 1rem;
  }
  @media (max-width: 500px) {
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
  padding-bottom: 2rem;
`

export default MainLayout
