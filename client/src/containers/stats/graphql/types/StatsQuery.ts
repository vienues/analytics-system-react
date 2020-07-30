/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: StatsQuery
// ====================================================

export interface StatsQuery_stock_stats {
  __typename: "Stats";
  week52high: number | null;
  week52low: number | null;
  ttmEPS: number | null;
  ttmDividendRate: number | null;
  dividendYield: number | null;
  peRatio: number | null;
  marketcap: number | null;
}

export interface StatsQuery_stock_quote {
  __typename: "Quote";
  id: string;
  low: number | null;
  high: number | null;
  open: number | null;
  previousClose: number | null;
  latestVolume: number | null;
  avgTotalVolume: number | null;
}

export interface StatsQuery_stock {
  __typename: "Stock";
  id: string;
  stats: StatsQuery_stock_stats;
  quote: StatsQuery_stock_quote;
}

export interface StatsQuery {
  stock: StatsQuery_stock;
}

export interface StatsQueryVariables {
  id: string;
}
