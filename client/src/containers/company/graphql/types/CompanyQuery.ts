/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CompanyQuery
// ====================================================

export interface CompanyQuery_stock_company {
  __typename: "Company";
  id: string;
  symbol: string;
  name: string | null;
  website: string | null;
  description: string | null;
}

export interface CompanyQuery_stock {
  __typename: "Stock";
  id: string;
  company: CompanyQuery_stock_company;
}

export interface CompanyQuery {
  stock: CompanyQuery_stock;
}

export interface CompanyQueryVariables {
  id: string;
}
