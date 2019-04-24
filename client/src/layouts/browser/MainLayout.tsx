import * as React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'
import { Ribbon } from '../../components'
import { Company, History, MarketList, News, Peers, Search, Stats, StockPrice } from '../../containers/'
import { AnalyticsStyle, Header, Title } from '../../rt-theme/analyticsStyle'
import { Divider, Gutter, ViewportFlex } from '../../styleguide'
import AppBar from './AppBar'

export interface IProps {
  id: string
}

export default class MainLayout extends React.Component<IProps> {
  public render() {
    const { id } = this.props
    return (
      <AppLayoutRoot>
        <AppBar />
        <ScrollableArea>
          <ViewportFlex column={true} className="">
            <SearchLayout id={id} />
            {id ? <StockDetails id={id} /> : null}
          </ViewportFlex>
          <Gutter />
        </ScrollableArea>
        <Ribbon>
          <MarketList />
        </Ribbon>
      </AppLayoutRoot>
    )
  }
}

const SearchLayout: React.FunctionComponent<{ id: string }> = ({ id }) => (
  <>
    <Flex wrap="true" style={{ marginTop: '16px' }}>
      <Search url={/stock/} id={id} />
      <StockPrice id={id} />
    </Flex>
    <Divider my={1} soft="true" />
  </>
)

const StockDetails: React.FunctionComponent<{ id: string }> = ({ id }) => (
  <Layout>
    <div style={{ width: '800px', marginRight: '10px' }}>
      <History id={id} />
      <AnalyticsStyle>
        <Header>
          <Title>Key Stats</Title>
        </Header>
        <Stats id={id} />
      </AnalyticsStyle>
    </div>
    <div style={{ height: '100%' }}>
      <News id={id} />
      <Company id={id} />
      <Peers id={id} />
    </div>
  </Layout>
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

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  @media (max-width: 750px) {
    display: block;
  }
  width: 100%;
`

const ScrollableArea = styled(Flex)`
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
`
