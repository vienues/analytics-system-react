/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NewsQuery
// ====================================================

export interface NewsQuery_news {
  __typename: "News";
  id: string;
  datetime: any;
  headline: string;
  source: string;
  url: string;
  summary: string;
  related: string;
}

export interface NewsQuery {
  news: NewsQuery_news[];
}

export interface NewsQueryVariables {
  id: string;
}
