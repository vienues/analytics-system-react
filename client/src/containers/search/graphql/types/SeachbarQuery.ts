/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeachbarQuery
// ====================================================

export interface SeachbarQuery_stock_company {
  __typename: "Company";
  id: string;
  symbol: string;
  name: string | null;
  website: string | null;
  description: string | null;
}

export interface SeachbarQuery_stock {
  __typename: "Stock";
  id: string;
  company: SeachbarQuery_stock_company;
}

export interface SeachbarQuery {
  stock: SeachbarQuery_stock;
}

export interface SeachbarQueryVariables {
  id: string;
}
