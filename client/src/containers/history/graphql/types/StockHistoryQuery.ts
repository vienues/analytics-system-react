/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: StockHistoryQuery
// ====================================================

export interface StockHistoryQuery_stock_chart {
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

export interface StockHistoryQuery_stock_quote {
  __typename: "Quote";
  id: string;
  previousClose: number | null;
}

export interface StockHistoryQuery_stock {
  __typename: "Stock";
  id: string;
  chart: StockHistoryQuery_stock_chart[];
  quote: StockHistoryQuery_stock_quote;
}

export interface StockHistoryQuery {
  stock: StockHistoryQuery_stock;
}

export interface StockHistoryQueryVariables {
  id: string;
}
