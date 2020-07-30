/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MarketQuery
// ====================================================

export interface MarketQuery_markets {
  __typename: "Quote";
  id: string;
  companyName: string | null;
  change: number | null;
  changePercent: number | null;
  latestPrice: number | null;
}

export interface MarketQuery {
  markets: MarketQuery_markets[];
}
