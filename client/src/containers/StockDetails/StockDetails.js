import React, { Component } from 'react';

import { Box, Heading, Flex, Lead, Small, Input, NavLink, Measure, Label, Text } from 'rebass';

import { Edge, Bleed, Divider, Column } from '../../styleguide';

import StockHistory from '../../components/StockHistory';

import STOCK_MOCK from './data';

class StockDetails extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.data.stock);
  }
  render() {
    const stock = { ...STOCK_MOCK, ...this.props.data.stock };

    return (
      <Box mb={4}>
        <Box bg="gray1">
          <Bleed py={4}>
            <Heading my={1}>
              {stock.name} ({stock.symbol})
            </Heading>
            <Flex align="baseline" my={1}>
              <Heading f={6}>{stock.quote.latestPrice}</Heading>
              <Box p={1} />
              <Lead color={stock.quote.change < 0 ? 'red' : 'green5'}>
                {stock.quote.change} ({stock.quote.changePercent})
              </Lead>
            </Flex>
            <Small my={1}>
              Market is {stock.market.open ? 'open' : 'closed'}. Close as of {stock.market.previousCloseDate}
            </Small>
            <RelatedStocks title="Peer Stocks" stocks={stock.peers} mt={2} />
            <Box>
              <Input placeholder="Start typing a symbol or company …" bg="gray0" f={1} p={2} />
            </Box>
          </Bleed>
        </Box>

        <Edge borderWidth={6} mb={4} />
        <Section title="Summary" children={<StockSummary {...stock.summary} />} />
        <Section title="Chart">
          <StockHistory data={stock.analytics.history.data} previousClose={stock.summary.previousClose} />
        </Section>
        <Section title="News">{stock.relatedNews.map((news, idx) => <NewsItem key={idx} {...news} />)}</Section>
        <Section title="Company">
          <CompanySummary company={stock.company} market={stock.market} />
        </Section>
      </Box>
    );
  }
}

const RelatedStocks = ({ title = 'Related', stocks, ...props }) => (
  <Flex align="center" color="blue" {...props}>
    <Small caps color="black">
      {title}
    </Small>
    <Box p={1} />
    {stocks.map(peer => <NavLink key={peer.symbol}>{peer.symbol}</NavLink>)}
  </Flex>
);

const Section = ({ title, children }) => (
  <Bleed my={3}>
    <Divider />
    <Heading f={4} my={2} pb={1}>
      {title}
    </Heading>
    {children}
  </Bleed>
);

const NewsItem = props => (
  <Box mb={3}>
    <Measure>
      <Heading f={2}>{props.title}</Heading>
    </Measure>
    <Measure mt={1}>
      <Small>{props.summary}</Small>
    </Measure>
    <RelatedStocks stocks={props.stocks} mt={2} />
    <Divider color="gray2" borderWidth={2} />
  </Box>
);

const StockSummary = props => (
  <div>
    <SummaryRow title="Volume">{props.volume}</SummaryRow>
    <SummaryRow title="Average daily volume">{props.averageDailyVolume}</SummaryRow>
    <SummaryRow title="Previous close">{props.previousClose}</SummaryRow>
    <SummaryRow title="52 week range">{props['52WeekRange']}</SummaryRow>
    <SummaryRow title="Market cap">{props.marketCap}</SummaryRow>
    <SummaryRow title="Beta">{props.beta}</SummaryRow>
    <SummaryRow title="Earnings per share">{props.earningsPerShare}</SummaryRow>
    <SummaryRow title="Latest EPS date">{props.earningsPerShareDate}</SummaryRow>
    <SummaryRow title="Dividend & yield">
      {props.dividend} ({props.yield})
    </SummaryRow>
    <SummaryRow title="Ex-dividend date">{props.exdividendDate}</SummaryRow>

    <SummaryRow title="P/E ratio">{props.priceToEarningsRatio}</SummaryRow>
  </div>
);

const CompanySummary = ({ company, market }) => (
  <Measure>
    <Box mb={2}>{company.summary}</Box>
    <SummaryRow title="Exchange">{market.name}</SummaryRow>
    <SummaryRow title="Number of employees">{company.numberOfEmployees}</SummaryRow>
    <SummaryRow title="Sector">{company.sector}</SummaryRow>
    <SummaryRow title="Industry">{company.industry}</SummaryRow>
  </Measure>
);

const SummaryRow = ({ title, children }) => (
  <Flex align="baseline" mt={1}>
    <Column>
      <Label>{title}</Label>{' '}
    </Column>
    <Column>
      <Text bold>{children}</Text>
    </Column>
  </Flex>
);
export default StockDetails;
