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
  creationTimestamp: number;
}

export interface ABMHistoryQuery {
  getPriceHistory: ABMHistoryQuery_getPriceHistory[];
}

export interface ABMHistoryQueryVariables {
  id: string;
}
