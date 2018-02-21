import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Panel, PanelHeading } from '../../components/index';

import { ViewportFlex, Divider, Gutter } from '../../styleguide/index';

import Search from '../../containers/Search/index';
import { Ribbon } from '../../components/';

import AppLayout from './AppLayout';
import News from '../../containers/News/index';
import Company from '../../containers/Company/index';
import MarketList from '../../containers/MarketList/index';
import Stats from '../../containers/Stats/index';
import History from '../../containers/History/index';
import StockPrice from '../../containers/StockPrice/index';

export default ({ id }) => (
  <AppLayout>
    <Search id={id}>
      <StockPrice id={id} />
    </Search>
    {id ? <StockDetails id={id} /> : null}
    <Ribbon>
      <MarketList />
    </Ribbon>
  </AppLayout>
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
