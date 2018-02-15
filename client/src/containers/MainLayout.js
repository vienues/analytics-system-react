import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

import { gradients, colors } from '../styleguide/colors';
import { ViewportFlex, Root, Divider, Heading } from '../styleguide/index';
import AppBar from '../components/AppBar';

import Markets from './MarketList/index';
import StockHeader from './StockHeader/index';
import News from './News/index';
import Company from './Company/index';
import Stats from './Stats/index';
import History from './History/index';

export default ({ id }) => (
  <Root column flex={1}>
    <AppBar />
    <ViewportFlex>
      <StockHeader id={id} />
    </ViewportFlex>
    <ViewportFlex>
      <MainColumn py={3}>
        <History id={id} />
      </MainColumn>
      <Box p={[1, 2]} />
      <SidebarColumn>
        <PanelHeading>Latest News</PanelHeading>
        <News id={id} />
      </SidebarColumn>
    </ViewportFlex>
    <ViewportFlex>
      <MainColumn>
        <PanelHeading>Key Stats</PanelHeading>
        <Stats id={id} />
      </MainColumn>
      <Box p={[1, 2]} />
      <SidebarColumn>
        <PanelHeading>Company Overview</PanelHeading>
        <Company id={id} />
      </SidebarColumn>
    </ViewportFlex>
    <Ribbon>
      <Markets />
    </Ribbon>
  </Root>
);

const Ribbon = styled(ViewportFlex)`
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;

  min-width: 100vw;
  min-height: 3rem;
  background-image: linear-gradient(180deg, ${gradients.secondary.join(', ')});

  color: ${colors.primary};
`;

const Panel = styled(Box).attrs({ pt: 2 })``;

const MainColumn = styled(Panel).attrs({ flex: 1, py: 2 })`
  min-height: calc(40vh - calc(12rem / 2));
`;

const SidebarColumn = styled(Panel).attrs({ width: [1, '20rem'] })``;

export const PanelHeading = ({ children, mt, mb }) => [
  <Heading key="heading" mt={mt} f={1} caps color="accent" bold>
    {children}
  </Heading>,
  <Divider key="divider" my={1} mb={mb} />,
];
