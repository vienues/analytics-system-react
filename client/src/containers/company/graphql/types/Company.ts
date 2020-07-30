/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Company
// ====================================================

export interface Company_company {
  __typename: 'Company'
  id: string
  symbol: string
  name: string | null
  website: string | null
  description: string | null
}

export interface Company {
  __typename: 'Stock'
  company: Company_company
}
