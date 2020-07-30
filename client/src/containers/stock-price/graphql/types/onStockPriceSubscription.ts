/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onStockPriceSubscription
// ====================================================

export interface onStockPriceSubscription_getQuotes {
  __typename: "Quote";
  id: string;
  change: number | null;
  changePercent: number | null;
  latestPrice: number | null;
}

export interface onStockPriceSubscription {
  getQuotes: onStockPriceSubscription_getQuotes;
}

export interface onStockPriceSubscriptionVariables {
  markets: string[];
}
