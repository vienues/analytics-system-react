/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onFXPriceSubscription
// ====================================================

export interface onFXPriceSubscription_getIntradayFXRate {
  __typename: "FxRate";
  date: any;
  fromCurrency: string;
  toCurrency: string;
  rate: number;
}

export interface onFXPriceSubscription {
  getIntradayFXRate: onFXPriceSubscription_getIntradayFXRate;
}

export interface onFXPriceSubscriptionVariables {
  from: string;
  to: string;
}
