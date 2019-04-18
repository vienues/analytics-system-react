import * as React from 'react'
import styled from 'styled-components'
import { Company, History, MarketList, News, StockPrice } from '../../containers/'
import Search from '../../containers/Search'
import Stats from '../../containers/Stats'
import { Ribbon } from '../../components'
import { Divider, ViewportFlex } from '../../styleguide'
import AppBar from './AppBar'
import { Flex } from 'rebass'
import { AnalyticsStyle, Header, Title } from '../../rt-theme/analyticsStyle'

export interface IProps {
  before?: React.ReactNode
  header?: React.ReactNode
  body?: React.ReactNode
  footer?: React.ReactNode
  after?: React.ReactNode
  id: string
}

export default class MainLayout extends React.Component<IProps> {
  public render() {
    const { id } = this.props
    // const { before, header, body, footer, after } = this.props
    return (
      <AppLayoutRoot>
        <AppBar />
        <ScrollableArea>
          <ViewportFlex column={true} className="">
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

const SearchLayout: React.FunctionComponent<{ id: string }> = ({ id }) => (
  <>
    <Flex wrap="true">
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
      <AnalyticsStyle style={{ height: 'initial', marginBottom: '10px' }}>
        <Header>
          <Title>Latest News</Title>
        </Header>
        <News id={id} />
      </AnalyticsStyle>
      <AnalyticsStyle style={{ height: 'initial' }}>
        <Header>
          <Title>Company Overview</Title>
        </Header>
        <Company id={id} />
      </AnalyticsStyle>
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
