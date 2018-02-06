import React, { Component } from 'react'
import { DateTime } from 'luxon'

import * as BS from 'rebass'

import { Edge, Bleed, Block, Container, Divider, Row, Column } from '../../styleguide'

import StockHistory from '../../components/StockHistory'

class StockDetails extends Component {
  render() {
    const stock = this.props.data
    return (
      <div>
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
      </div>
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
    <Row>
      <Column>
        <BS.Label>Volume</BS.Label>
      </Column>
      <Column>{props.volume}</Column>
    </Row>
    <Row>
      <Column>
        <BS.Label>Average daily volume</BS.Label>
      </Column>
      <Column>{props.averageDailyVolume}</Column>
    </Row>
    <Row>
      <Column>
        <BS.Label>Previous close</BS.Label>
      </Column>
      <Column>{props.previousClose}</Column>
    </Row>
    <Row>
      <Column>
        <BS.Label>52 week range</BS.Label>
      </Column>
      <Column>{props['52WeekRange']}</Column>
    </Row>
    <Row>
      <Column>
        <BS.Label>Market cap</BS.Label>
      </Column>
      <Column>{props.marketCap}</Column>
    </Row>
    <Row>
      <Column>
        <BS.Label>Beta</BS.Label>
      </Column>
      <Column>{props.beta}</Column>
    </Row>
    <Row>
      <Column>
        <BS.Label>earningsPerShare</BS.Label>
      </Column>
      <Column>{props.earningsPerShare}</Column>
    </Row>
    <Row>
      <Column>
        <BS.Label>Latest EPS date</BS.Label>
      </Column>
      <Column>{props.earningsPerShareDate}</Column>
    </Row>
    <Row>
      <Column>
        <BS.Label>Dividend & yield</BS.Label>
      </Column>
      <Column>
        {props.dividend} ({props.yield})
      </Column>
    </Row>
    <Row>
      <Column>
        <BS.Label>Ex-dividend date</BS.Label>
      </Column>
      <Column>{props.exdividendDate}</Column>
    </Row>
    <Row>
      <Column>
        <BS.Label>P/E ratio</BS.Label>
      </Column>
      <Column>{props.priceToEarningsRatio}</Column>
    </Row>
  </div>
)

const CompanySummary = ({ company, market }) => (
  <BS.Measure>
    {company.summary}
    <CompanySummaryField title="Exchange">{market.name}</CompanySummaryField>
    <CompanySummaryField title="Number of employees">{company.numberOfEmployees}</CompanySummaryField>
    <CompanySummaryField title="Sector">{company.sector}</CompanySummaryField>
    <CompanySummaryField title="Industry">{company.industry}</CompanySummaryField>
  </BS.Measure>
)

const CompanySummaryField = ({ title, children }) => (
  <BS.Flex align="baseline" mt={2}>
    <Column>
      <BS.Small bold>{title}</BS.Small>{' '}
    </Column>
    <Column>
      <BS.Text>{children}</BS.Text>
    </Column>
  </BS.Flex>
)
export default StockDetails
