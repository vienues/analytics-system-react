/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MarketSegment } from "./../../../global-types/global-types";

// ====================================================
// GraphQL query operation: search
// ====================================================

export interface search_symbols {
  __typename: "SearchResult";
  id: string;
  name: string;
  marketSegment: string;
}

export interface search {
  symbols: search_symbols[];
}

export interface searchVariables {
  text: string;
  marketSegment: MarketSegment;
}
