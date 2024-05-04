"use client";

import { graphql } from "@/gql";

export const UserDetails = graphql(/* GraphQL */ `
  fragment UserDetails on User {
    id
    name
    email
    slugName
  }
`);

export const ToastDetails = graphql(/* GraphQL */ `
  fragment ToastDetails on Toast {
    text
    type
  }
`);

export const PaginationDetails = graphql(/* GraphQL */ `
  fragment PaginationDetails on Pagination {
    totalRecords
    currentLimit
    currentPage
    hasNextPage
  }
`);
