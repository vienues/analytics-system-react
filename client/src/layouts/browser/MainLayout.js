import { Panel, PanelHeading } from 'components';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Divider, Gutter, ViewportFlex } from 'styleguide';
import { Ribbon } from '../../components/index';
import Company from '../../containers/Company/index';
import History from '../../containers/History/index';
import MarketList from '../../containers/MarketList/index';
import News from '../../containers/News/index';
import Search from '../../containers/Search/index';
import Stats from '../../containers/Stats/index';
import StockPrice from '../../containers/StockPrice/index';
import { Root } from '../../styleguide/index';
import AppBar from './AppBar';

export default ({ id }) => (
  <Root column flex={1}>
    <AppBar />
    <ViewportFlex wrap f={5} align="center">
      <Search url={/stock/} id={id} />
      <StockPrice id={id} />
      <Divider my={1} />
    </ViewportFlex>

    {id ? <StockDetails id={id} /> : null}
    <Ribbon>
      <MarketList />
    </Ribbon>
  </Root>
);

const StockDetails = ({ id }) => (
  <ViewportFlex wrap>
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
  </ViewportFlex>
);

const MainColumn = styled(Panel).attrs({ flex: ['1 100%', '1 100%', 1], py: 2 })`
  min-height: calc(40vh - calc(12rem / 2));
`;

const SidebarColumn = props => (
  <Fragment>
    <Gutter />
    <Panel width={[1, '20rem']} {...props} />
  </Fragment>
);
