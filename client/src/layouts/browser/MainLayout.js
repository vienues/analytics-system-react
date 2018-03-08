import { Panel, PanelHeading } from 'components'
import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Divider, Gutter, Root, ViewportFlex } from 'styleguide'
import { Ribbon } from '../../components'
import Company from '../../containers/Company'
import History from '../../containers/History'
import MarketList from '../../containers/MarketList'
import News from '../../containers/News'
import Search from '../../containers/Search'
import Stats from '../../containers/Stats'
import StockPrice from '../../containers/StockPrice'
import AppBar from './AppBar'
import { Flex } from 'rebass'

export default ({ id }) => (
  <Root column>
    <ScrollableArea>
      <ViewportFlex column>
        <AppBar />
        <SearchLayout id={id} />
        {id ? <StockDetails id={id} /> : null}
      </ViewportFlex>
    </ScrollableArea>
    <Ribbon>
      <MarketList />
    </Ribbon>
  </Root>
)

const SearchLayout = ({ id }) => (
  <Flex wrap f={5} align="center">
    <Search url={/stock/} id={id} />
    <StockPrice id={id} />
    <Divider my={1} alt />
  </Flex>
)

const StockDetails = ({ id }) => (
  <Flex wrap py={2}>
    <MainColumn py={3}>
      <History id={id} />
    </MainColumn>
    <SidebarColumn>
      <PanelHeading>Latest News</PanelHeading>
      <News id={id} />
    </SidebarColumn>
    <Divider my={0} color="transparent" />
    <MainColumn>
      <PanelHeading>Key Stats</PanelHeading>
      <Stats id={id} />
    </MainColumn>
    <SidebarColumn>
      <PanelHeading>Company Overview</PanelHeading>
      <Company id={id} />
    </SidebarColumn>
  </Flex>
)

const ScrollableArea = styled(Flex)`
  flex-direction: column;
  overflow-y: auto;
`

const MainColumn = styled(Panel).attrs({ flex: ['1 100%', '1 100%', 1], py: 2 })`
  min-height: calc(40vh - calc(12rem / 2));
`

const SidebarColumn = props => (
  <Fragment>
    <Gutter />
    <Panel width={[1, '20rem']} {...props} />
  </Fragment>
)
