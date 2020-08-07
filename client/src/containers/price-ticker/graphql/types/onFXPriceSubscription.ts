/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onFXPriceSubscription
// ====================================================

export interface onFXPriceSubscription_getFXPriceUpdates {
  __typename: "FxRate";
  Bid: number | null;
  Ask: number | null;
  Mid: number | null;
  ValueDate: any | null;
  CreationTimestamp: number | null;
}

export interface onFXPriceSubscription {
  getFXPriceUpdates: onFXPriceSubscription_getFXPriceUpdates;
}

export interface onFXPriceSubscriptionVariables {
  id: string;
}
