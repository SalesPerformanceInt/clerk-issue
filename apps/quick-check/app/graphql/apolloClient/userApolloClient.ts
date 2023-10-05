import invariant from "tiny-invariant";

import { getUserDataFromFromSession } from "~/models/session";

import { GraphQLClient } from "./genericApolloClient";
import { getHasuraJWT, getJWTHeader } from "./jwt";
import { createGraphQLProxy, type ProxyGraphQLClient } from "./proxy";

/**
 * User Apollo Client Declaration
 */

class UserGraphQLClient extends GraphQLClient {
  constructor(jwt: string) {
    super(getJWTHeader(jwt));
  }
}

const getUserApolloClient = async (
  userId: string,
  tenantId: string,
  now: string,
) => {
  const jwt = await getHasuraJWT({
    "x-hasura-default-role": "user",
    "x-hasura-allowed-roles": ["user"],
    "x-hasura-user-id": userId,
    "x-hasura-tenant-id": tenantId,
  });

  const userApolloClient = new UserGraphQLClient(jwt);

  return createGraphQLProxy<
    UserGraphQLClient,
    ProxyGraphQLClient<UserGraphQLClient, "User">
  >(userApolloClient, { now, userId, tenantId });
};

/**
 * User Apollo Client Callers
 */

export const getUserApolloClientFromRequest = async (request: Request) => {
  const [now, userId, tenantId] = await getUserDataFromFromSession(request);

  invariant(userId, "Missing User ID");
  invariant(tenantId, "Missing Tenant ID");

  return getUserApolloClient(userId, tenantId, now);
};

export const getOptionalUserApolloClientFromRequest = async (
  request: Request,
) => {
  const [now, userId, tenantId] = await getUserDataFromFromSession(request);

  if (!userId || !tenantId) return null;

  return getUserApolloClient(userId, tenantId, now);
};
