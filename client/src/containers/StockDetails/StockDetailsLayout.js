import React  from 'react';
import * as moment from 'moment';
import styled from 'styled-components';
import { Box, Flex, Measure } from 'rebass';

import { gradients, colors } from '../../styleguide/colors'
import { ViewportFlex, Root, Divider, BlockLink, Text, Heading, Lead, RootBleed } from '../../styleguide';
import AppBar from '../../components/AppBar'

import StockHistory from '../../components/StockHistory';
import StockCompanyConnector from '../../connectors/StockCompany';
import StockNewsConnector from '../../connectors/StockNews';
import StockTickerConnector from '../../connectors/StockTicker';
import StockStatsConnector from '../../connectors/StockStats';
import Markets from '../MarketList';
import StockHeader from '../StockHeader'

export default ({id}) => (
  <Root column flex={1}>
    <AppBar/>
    <ViewportFlex>
      <StockHeader id={id}/>
    </ViewportFlex>
    <ViewportFlex>
      <MainColumn py={3}>
        <StockTickerConnector id={id} is={StockTickerChart}/>
      </MainColumn>
      <Box p={1}/>
      <SidebarColumn>
        <ChartHeading>Latest News</ChartHeading>
        <StockNewsConnector id={id} is={NewsSidebar}/>
      </SidebarColumn>
    </ViewportFlex>
    <ViewportFlex>
      <MainColumn>
        <ChartHeading>Key Stats</ChartHeading>
        <StockStatsConnector id={id} is={StockStats}/>
      </MainColumn>
      <Box p={1}/>
      <SidebarColumn>
        <ChartHeading>Company Overview</ChartHeading>
        <StockCompanyConnector id={id} is={CompanySidebar}/>
      </SidebarColumn>
    </ViewportFlex>
    <Ribbon>
      <Markets/>
    </Ribbon>
  </Root>
)


const Ribbon = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;

  min-width: 100vw;
  min-height: 3rem;
  background-image: linear-gradient(${gradients.secondary.join(', ')});

  color: ${colors.primary};
`

const Panel = styled(Box).attrs({ my: 2 })`

`
const MainColumn = styled(Panel).attrs({flex: 1, py: 2})`
  min-height: calc(40vh - calc(4rem / 2));
`

const SidebarColumn = styled(Panel).attrs({ width: [1, '20rem'] })`

`

export const ChartHeading = ({children, mt, mb}) => [
  <Heading key="heading" mt={mt} f={1} caps color="accent" bold>
    {children}
  </Heading>,
  <Divider key="divider" my={1} mb={mb}/>,
];

export const StockTickerChart = props => {
  if (props.data.loading) {
    return 'loading';
  }
  if (props.data.stock == null) {
    return 'error loading data';
  }

  return <StockHistory data={props.data.stock.chart} tenor="1m" select="average" label="label"/>;
};

export const NewsSidebar = props => {
  if (props.data.loading) {
    return 'loading';
  }
  if (props.data.stock == null) {
    return 'error loading data';
  }

  return (props.data.stock.news || []).map(newsItem => (
    <Box key={newsItem.id} is="a" target="_blank" href={newsItem.url} flex={1}>
      <Measure f={1} my={2}>
        <Lead f={1} color="offwhite">
          {newsItem.headline}
        </Lead>
        <Text f={0} color="offwhite50">
          {moment(newsItem.datetime).fromNow()} - {newsItem.source}
        </Text>
      </Measure>
    </Box>
  ));
};

export const CompanySidebar = props => {
  if (props.data.loading) {
    return 'loading';
  }
  if (props.data.stock == null) {
    return 'error loading data';
  }

  const {company, peers} = props.data.stock;

  return (
    <Box flex={1}>
      <Lead f={3} my={2} color="offwhite50">
        {company.name} ({company.symbol})
      </Lead>
      <Measure f={0} color="offwhite">
        {company.description}
      </Measure>
      <BlockLink target="_blank" href={company.website} f={0} color="accent" my={2}>
        <em>{company.website.replace(/https?:\/\//, '')}</em>
      </BlockLink>
      <Measure f={0} color="offwhite" my={1}>
        Top Peers
      </Measure>
      <Flex>
        {peers.map(symbol => (
          <BlockLink key={symbol} href={`/stock/${symbol}`} pr={1}>
            {symbol}
          </BlockLink>
        ))}
      </Flex>
    </Box>
  );
};

export const StockStats = props => {
  if (props.data.loading) {
    return 'loading';
  }
  if (props.data.stock == null) {
    console.log(props.data);
    return 'error loading data';
  }

  const {stats, quote} = props.data.stock;

  return (
    <Flex flex={1} wrap={false}>
      <Flex w={[1, 1 / 2]} column>
        <FieldRow label="Previous Close">{quote.previousClose}</FieldRow>
        <FieldRow label="Day Range">
          {quote.low} - {quote.high}
        </FieldRow>
        <FieldRow label="Volume">{quote.latestVolume}</FieldRow>
        <FieldRow label="Market Cap">{stats.marketcap}</FieldRow>
        <FieldRow label="P/E Ratio">{stats.peRatioHigh}</FieldRow>
      </Flex>
      <Box p={2}/>
      <Flex w={[1, 1 / 2]} column>
        <FieldRow label="Open">{quote.open}</FieldRow>
        <FieldRow label="52 Week Range">
          {stats.week52low} - {stats.week52high}
        </FieldRow>
        <FieldRow label="Total Avg. Volume">{quote.avgTotalVolume}</FieldRow>
        <FieldRow label="Earnings Per Share">{stats.latestEPS}</FieldRow>
        <FieldRow label="Dividend & Yield">{stats.peRatioHigh}</FieldRow>
      </Flex>
    </Flex>
  );
};

const FieldRow = ({label, children}) => {
  return (
    <Flex flex={1} column>
      <Flex flex={1} my={1}>
        <Box flex={1}>
          <Text f={0} color="offwhite50" weight={300}>
            {label}
          </Text>
        </Box>
        <Box>
          <Text f={0} color="offwhite">
            {children}
          </Text>
        </Box>
      </Flex>
      <Divider color="gray9" borderWidth={1} my={0}/>
    </Flex>
  );
};
