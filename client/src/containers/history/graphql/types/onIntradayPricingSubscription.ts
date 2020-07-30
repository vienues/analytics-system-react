/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onIntradayPricingSubscription
// ====================================================

export interface onIntradayPricingSubscription_getIntradayPrices {
  __typename: "Intraday";
  datetime: any | null;
  open: number | null;
  close: number | null;
  high: number | null;
  low: number | null;
  volume: number | null;
  numberOfTrades: number | null;
}

export interface onIntradayPricingSubscription {
  getIntradayPrices: onIntradayPricingSubscription_getIntradayPrices[];
}

export interface onIntradayPricingSubscriptionVariables {
  symbol: string;
}
