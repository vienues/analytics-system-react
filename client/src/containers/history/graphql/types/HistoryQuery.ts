/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HistoryQuery
// ====================================================

export interface HistoryQuery_stock_chart {
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

export interface HistoryQuery_stock_quote {
  __typename: "Quote";
  id: string;
  previousClose: number | null;
}

export interface HistoryQuery_stock {
  __typename: "Stock";
  id: string;
  chart: HistoryQuery_stock_chart[];
  quote: HistoryQuery_stock_quote;
}

export interface HistoryQuery_OLHC {
  __typename: "OLHC";
  open: number | null;
  close: number | null;
  low: number | null;
  high: number | null;
}

export interface HistoryQuery {
  stock: HistoryQuery_stock;
  OLHC: HistoryQuery_OLHC;
}

export interface HistoryQueryVariables {
  id: string;
}
