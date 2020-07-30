/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ABMHistoryQuery
// ====================================================

export interface ABMHistoryQuery_getPriceHistory {
  __typename: "FxPricing";
  ask: number;
  bid: number;
  mid: number;
  valueDate: any;
  creationTimestamp: any | null;
}

export interface ABMHistoryQuery {
  getPriceHistory: ABMHistoryQuery_getPriceHistory[];
}

export interface ABMHistoryQueryVariables {
  from: string;
  to: string;
}
