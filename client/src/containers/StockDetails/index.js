import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import StockDetails from './StockDetails';

const getSymbolDetails = gql`
  query getSymbolDetails($id: String!) {
    stock(symbol: $id) {
      # id
      name: companyName
      marketcap
      beta
      week52high
      week52low
      week52change
      shortInterest
      shortDate
      dividendRate
      dividendYield
      exDividendDate
      latestEPS
      latestEPSDate
      sharesOutstanding
      float
      returnOnEquity
      consensusEPS
      numberOfEstimates
      symbol
      EBITDA
      revenue
      grossProfit
      cash
      debt
      ttmEPS
      revenuePerShare
      revenuePerEmployee
      peRatioHigh
      peRatioLow
      EPSSurpriseDollar
      EPSSurprisePercent
      returnOnAssets
      returnOnCapital
      profitMargin
      priceToSales
      priceToBook
      day200MovingAvg
      day50MovingAvg
      institutionPercent
      insiderPercent
      shortRatio
      year5ChangePercent
      year2ChangePercent
      year1ChangePercent
      ytdChangePercent
      month6ChangePercent
      month3ChangePercent
      month1ChangePercent
      day5ChangePercent
    }
  }
`;

export default graphql(getSymbolDetails, {
  options({ match }) {
    return { variables: { id: match.params.symbol } };
  },
})(StockDetails);
