/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IntradayQuery
// ====================================================

export interface IntradayQuery_intradayPrices {
  __typename: "Intraday";
  datetime: any | null;
  open: number | null;
  close: number | null;
  high: number | null;
  low: number | null;
  volume: number | null;
  numberOfTrades: number | null;
}

export interface IntradayQuery {
  intradayPrices: IntradayQuery_intradayPrices[];
}

export interface IntradayQueryVariables {
  symbol: string;
}
