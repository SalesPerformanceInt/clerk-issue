import { HASURA_AUTH_TOKEN } from "~/utils/envs.server";

import { getAdminDataFromFromSession } from "~/models/session";

import { GraphQLClient } from "./genericApolloClient";
import { getHasuraJWT, getJWTHeader } from "./jwt";
import { createGraphQLProxy, type ProxyGraphQLClient } from "./proxy";

/**
 * Admin Apollo Client Declaration
 */

export class AdminGraphQLClient extends GraphQLClient {
  constructor(jwt: string) {
    super(getJWTHeader(jwt));
  }
}

export const getAdminApolloClient = async (now: string) => {
  const jwt = await getHasuraJWT({
    "x-hasura-default-role": "admin",
    "x-hasura-allowed-roles": ["admin"],
    "x-hasura-admin-secret": HASURA_AUTH_TOKEN,
  });

  const adminApolloClient = new AdminGraphQLClient(jwt);

  return createGraphQLProxy<
    AdminGraphQLClient,
    ProxyGraphQLClient<AdminGraphQLClient, "Admin">
  >(adminApolloClient, { now });
};

/**
 * Admin Apollo Client Callers
 */

export const getAdminApolloClientFromRequest = async (request: Request) => {
  const [now] = await getAdminDataFromFromSession(request);

  return getAdminApolloClient(now);
};
