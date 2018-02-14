import _ from 'lodash';
import React, { PureComponent } from 'react';
import * as moment from 'moment';
import styled from 'styled-components';
import { Box, Flex, Measure } from 'rebass';

import { gradients, colors } from '../../styleguide/colors'
import { Root, Divider, BlockLink, Text, Heading, Lead } from '../../styleguide';

import StockHistory from '../../components/StockHistory';
import StockCompanyConnector from '../../connectors/StockCompany';
import StockNewsConnector from '../../connectors/StockNews';
import StockTickerConnector from '../../connectors/StockTicker';
import StockStatsConnector from '../../connectors/StockStats';
import Markets from '../MarketList';


export default class Layout extends PureComponent {
  render() {
    return (
      <Root column flex={1}>
        {/* <RootBleed>
          <Box pt={4}/>
        </RootBleed> */}
        <RootBleed>
          <PageTitle {...this.props} />
        </RootBleed>
        <RootBleed>
          <MainColumn py={3}>
            <StockTickerConnector id={this.props.id} is={StockTickerChart} />
          </MainColumn>
          <SidebarColumn>
            <ChartHeading>Latest News</ChartHeading>
            <StockNewsConnector id={this.props.id} is={NewsSidebar} />
          </SidebarColumn>
        </RootBleed>
        <RootBleed>
          <MainColumn>
            <ChartHeading>Key Stats</ChartHeading>
            <StockStatsConnector id={this.props.id} is={StockStats} />
          </MainColumn>
          <SidebarColumn>
            <ChartHeading>Company Overview</ChartHeading>
            <StockCompanyConnector id={this.props.id} is={CompanySidebar} />
          </SidebarColumn>
        </RootBleed>
        <Ribbon>
          <Markets/>
        </Ribbon>
      </Root>
    );
  }
}

const Ribbon = styled.div`
  display: flex;
  align-items: center;

  min-width: 100vw;
  min-height: 3rem;
  background-image: linear-gradient(${gradients.secondary.join(', ')});

  color: ${colors.primary};
`

const RootBleed = styled(Flex)`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`

const PageTitle = props => {
  let { id, data } = props;
  data = data || {};

  const company = _.get(data.stock, ['company']) || {};
  const quote = _.get(data.stock, ['quote']) || {};
  console.log(`{company, quote}`, { company, quote });
  return (
    <RootBleed column px={[2, 3]} pt={2}>
      <Lead is="div" f={5} color="offwhite">
        <Flex>
          {company.name}{' '}
          <Text inline={'true'} color="offwhite50" pl={1}>
            ({id.toUpperCase()})
          </Text>
          <Heading color="secondary" />
          <Box flex={1} />
          <Text pr={2}>{quote.latestPrice} </Text>
          <Text is="div" color={quote.change < 0 ? 'red' : 'green7'}>
            {quote.change != null ? quote.change.toFixed(2) : ''}
            {quote.change != null &&
              quote.changePercent != null && (
                <Text color="gray8" inline px={1}>
                  |
                </Text>
              )}
            {quote.changePercent != null ? quote.changePercent.toFixed(2) * 100 + '%' : ''}
          </Text>
        </Flex>
      </Lead>
      <Divider my={1} />
    </RootBleed>
  )
}

const MainColumn = styled(Box).attrs({ flex: 1, py: 2, pl: [2, 3], pr: [1, 2] })`
  min-height: calc(50vh - 4rem);
`

const SidebarColumn = props => <Box width={[1, '20rem']} py={2} pl={[1, 2]} pr={[2, 3]} {...props} />;

export const ChartHeading = ({ children, mt, mb }) => [
  <Heading key="heading" mt={mt} f={1} caps color="accent" bold>
    {children}
  </Heading>,
  <Divider key="divider" my={1} mb={mb} />,
];

export const StockTickerChart = props => {
  if (props.data.loading) {
    return 'loading';
  }
  if (props.data.stock == null) {
    return 'error loading data';
  }

  return <StockHistory data={props.data.stock.chart} tenor="1m" select="average" label="label" />;
};

export const NewsSidebar = props => {
  if (props.data.loading) {
    return 'loading';
  }
  if (props.data.stock == null) {
    return 'error loading data';
  }

  return (props.data.stock.news || []).map(newsItem => (
    <Box key={newsItem.id} is="a" target="_blank" href={newsItem.url} flex={1} >
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

  const { company, peers } = props.data.stock;

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

  const { stats, quote } = props.data.stock;

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
      <Box p={2} />
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

const FieldRow = ({ label, children }) => {
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
      <Divider color="gray9" borderWidth={1} my={0} />
    </Flex>
  );
};
