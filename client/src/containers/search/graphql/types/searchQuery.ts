/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchQuery
// ====================================================

export interface searchQuery_symbol {
  __typename: "SearchResult";
  id: string;
  name: string;
  marketSegment: string;
}

export interface searchQuery {
  symbol: searchQuery_symbol;
}

export interface searchQueryVariables {
  id: string;
  market: string;
}
