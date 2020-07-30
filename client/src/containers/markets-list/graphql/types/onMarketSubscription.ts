/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onMarketSubscription
// ====================================================

export interface onMarketSubscription_getQuotes {
  __typename: "Quote";
  id: string;
  change: number | null;
  changePercent: number | null;
  latestPrice: number | null;
}

export interface onMarketSubscription {
  getQuotes: onMarketSubscription_getQuotes;
}

export interface onMarketSubscriptionVariables {
  markets: string[];
}
