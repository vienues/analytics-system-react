/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: History
// ====================================================

export interface History_chart {
  __typename: "Tick";
  label: string;
  datetime: any;
  average: number | null;
  open: number | null;
  low: number | null;
  high: number | null;
  close: number | null;
  volume: number;
}

export interface History_quote {
  __typename: "Quote";
  id: string;
  previousClose: number | null;
}

export interface History {
  __typename: "Stock";
  chart: History_chart[];
  quote: History_quote;
}
