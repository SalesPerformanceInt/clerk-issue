import invariant from "tiny-invariant";

import { getUserDataFromFromSession } from "~/models/session";

import { GraphQLClient } from "./genericApolloClient";
import { getHasuraJWT, getJWTHeader } from "./jwt";
import { GQLProxyData, ProxyGraphQLClient } from "./proxy";

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

  return new Proxy<UserGraphQLClient, ProxyGraphQLClient<UserGraphQLClient>>(
    userApolloClient,
    {
      get(target, key) {
        const proxyData: GQLProxyData = { userId, tenantId, now };

        const callable = Reflect.get(target, key);

        if (typeof callable !== "function") return callable;

        return (...args: unknown[]) =>
          callable.call(target, ...args, proxyData);
      },
    },
  );
};

/**
 * User Apollo Client Callers
 */

export const getUserApolloClientFromRequest = async (request: Request) => {
  const [userId, tenantId, now] = await getUserDataFromFromSession(request);

  invariant(userId, "Missing User ID");
  invariant(tenantId, "Missing Tenant ID");

  return getUserApolloClient(userId, tenantId, now);
};

export const getOptionalUserApolloClientFromRequest = async (
  request: Request,
) => {
  const [userId, tenantId, now] = await getUserDataFromFromSession(request);

  if (!userId || !tenantId) return null;

  return getUserApolloClient(userId, tenantId, now);
};
