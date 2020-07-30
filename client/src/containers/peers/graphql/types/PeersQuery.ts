/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PeersQuery
// ====================================================

export interface PeersQuery_stock {
  __typename: "Stock";
  id: string;
  peers: string[];
}

export interface PeersQuery {
  stock: PeersQuery_stock;
}

export interface PeersQueryVariables {
  id: string;
}
