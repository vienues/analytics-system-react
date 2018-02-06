import React, { Component } from 'react'
import * as BS from 'rebass'

import { Edge, Bleed, Block, Container, Divider, Row, Column } from '../../styleguide'

import StockHistory from '../../components/StockHistory'

class StockDetails extends Component {
  render() {
    const stock = this.props.data
    return (
      <BS.Box mb={4}>
        <BS.Box bg={stock.summary.change < 0 ? 'red' : 'gray1'}>
          <Bleed py={4}>
            <BS.Heading my={1}>
              {stock.name} ({stock.symbol})
            </BS.Heading>
            <BS.Flex align="baseline" my={1}>
              <BS.Heading f={6}>{stock.summary.price}</BS.Heading>
              <BS.Box p={1} />
              <BS.Lead color={stock.summary.change < 0 ? 'red' : 'green5'}>
                {stock.summary.change} ({stock.summary.changePercent})
              </BS.Lead>
            </BS.Flex>
            <BS.Small my={1}>
              Market is {stock.market.open ? 'open' : 'closed'}. Close as of {stock.market.previousCloseDate}
            </BS.Small>
            <RelatedStocks title="Peer Stocks" stocks={stock.peers} />
            <BS.Box>
              <BS.Input placeholder="Start typing a symbol or company …" bg="gray0" f={1} p={2} />
            </BS.Box>
          </Bleed>
        </BS.Box>

        <Edge borderWidth={6} mb={4} />
        <Section title="Summary" children={<StockSummary {...stock.summary} />} />
        <Section title="Chart">
          <StockHistory data={stock.analytics.history.data} previousClose={stock.summary.previousClose} />
        </Section>
        <Section title="News">
          {stock.relatedNews.map((news, idx) => <NewsItem key={idx} {...news} />)}
        </Section>
        <Section title="Company">
          <CompanySummary company={stock.company} market={stock.market} />
        </Section>
      </BS.Box>
    )
  }
}

const RelatedStocks = ({ title = 'Related', stocks, ...props }) => (
  <BS.Flex align="center" color="blue" {...props}>
    <BS.Small caps color="black">
      {title}
    </BS.Small>
    <BS.Box p={1} />
    {stocks.map(peer => <BS.NavLink key={peer.symbol}>{peer.symbol}</BS.NavLink>)}
  </BS.Flex>
)

const Section = ({ title, children }) => (
  <Bleed my={3}>
    <Divider />
    <BS.Heading f={4} my={2} pb={1}>
      {title}
    </BS.Heading>
    {children}
  </Bleed>
)

const NewsItem = props => (
  <BS.Box mb={3}>
    <BS.Measure>
      <BS.Heading f={2}>{props.title}</BS.Heading>
    </BS.Measure>
    <BS.Measure mt={1}>
      <BS.Small>{props.summary}</BS.Small>
    </BS.Measure>
    <RelatedStocks stocks={props.stocks} mt={2} />
    <BS.Divider color="gray2" />
  </BS.Box>
)

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
)

const CompanySummary = ({ company, market }) => (
  <BS.Measure>
    <BS.Box mb={2}>
      {company.summary}
    </BS.Box>
    <SummaryRow title="Exchange">{market.name}</SummaryRow>
    <SummaryRow title="Number of employees">{company.numberOfEmployees}</SummaryRow>
    <SummaryRow title="Sector">{company.sector}</SummaryRow>
    <SummaryRow title="Industry">{company.industry}</SummaryRow>
  </BS.Measure>
)

const SummaryRow = ({ title, children }) => (
  <BS.Flex align="baseline" mt={1}>
    <Column>
      <BS.Label>{title}</BS.Label>{' '}
    </Column>
    <Column>
      <BS.Text bold>{children}</BS.Text>
    </Column>
  </BS.Flex>
)
export default StockDetails
