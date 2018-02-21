import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Box } from 'rebass';
import { ViewportFlex, Divider, Heading, Gutter } from '../styleguide';

import Search from './Search';
import RibbonLayout from './RibbonLayout';

import AppLayout from './AppLayout';
import News from './News';
import Company from './Company';
import Stats from './Stats';
import History from './History';
import StockPrice from './StockPrice';

export default ({ id }) => (
  <AppLayout>
    <Search id={id}>
      <StockPrice id={id} />
    </Search>
    {id ? <StockDetails id={id} /> : null}
    <RibbonLayout />
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

const Panel = props => <Box pt={2} {...props} />;

const MainColumn = styled(Panel).attrs({ flex: ['1 100%', '1 100%', 1], py: 2 })`
  min-height: calc(40vh - calc(12rem / 2));
`;

const SidebarColumn = props => (
  <Fragment>
    <Gutter />
    <Panel width={[1, '20rem']} {...props} />
  </Fragment>
);

export const PanelHeading = ({ children, mt, mb }) => [
  <Heading key="heading" mt={mt} f={1} caps color="accent" bold>
    {children}
  </Heading>,
  <Divider key="divider" my={1} mb={mb} />,
];
