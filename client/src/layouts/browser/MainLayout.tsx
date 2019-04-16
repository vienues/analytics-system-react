import * as React from 'react'
import styled from 'styled-components'

import { Ribbon } from '../../components'
import { Divider, ViewportFlex } from '../../styleguide'
import Company from '../../containers/Company'
import History from '../../containers/History'
import MarketList from '../../containers/MarketList'
import News from '../../containers/News'
import Search from '../../containers/Search'
import Stats from '../../containers/Stats'
import StockPrice from '../../containers/StockPrice'
import AppBar from './AppBar'
import { Flex } from 'rebass'

import { AnalyticsStyle, Title, Header } from '../../rt-theme/analyticsStyle'

export interface Props {
  before?: React.ReactNode
  header?: React.ReactNode
  body?: React.ReactNode
  footer?: React.ReactNode
  after?: React.ReactNode
  id: string
}

export default class MainLayout extends React.Component<Props> {
  public render() {
    const { id } = this.props
    // const { before, header, body, footer, after } = this.props
    return (
      <AppLayoutRoot>
        <AppBar />
        <ScrollableArea>
          <ViewportFlex column className="">
            <SearchLayout id={id} />
            {id ? <StockDetails id={id} /> : null}
          </ViewportFlex>
        </ScrollableArea>
        <Ribbon>
          <MarketList />
        </Ribbon>
      </AppLayoutRoot>
    )
  }
}

const SearchLayout = ({ id }: { id: any }) => (
  <Flex wrap="true">
    <Search url={/stock/} id={id} />
    <StockPrice id={id} />
    <Divider my={1} soft="true" />
  </Flex>
)

const StockDetails = ({ id }: { id: any }) => (
  <>
    <AnalyticsStyle>
      <Header>
        <Title>Latest News</Title>
        <News id={id} />
      </Header>
      <React.Fragment>
        <Title>Company Overview</Title>
        <Company id={id} />
      </React.Fragment>
    </AnalyticsStyle>

    <History id={id} />
    <Title>Key Stats</Title>
    <Stats id={id} />
  </>
)

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

const ScrollableArea = styled(Flex)`
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
`
