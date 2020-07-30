/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Stats
// ====================================================

export interface Stats_stats {
  __typename: "Stats";
  week52high: number | null;
  week52low: number | null;
  ttmEPS: number | null;
  ttmDividendRate: number | null;
  dividendYield: number | null;
  peRatio: number | null;
  marketcap: number | null;
}

export interface Stats_quote {
  __typename: "Quote";
  id: string;
  low: number | null;
  high: number | null;
  open: number | null;
  previousClose: number | null;
  latestVolume: number | null;
  avgTotalVolume: number | null;
}

export interface Stats {
  __typename: "Stock";
  stats: Stats_stats;
  quote: Stats_quote;
}
