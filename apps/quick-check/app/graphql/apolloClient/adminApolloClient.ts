import { HASURA_AUTH_TOKEN } from "~/utils/envs.server";

import { getAdminDataFromFromSession } from "~/models/session";

import { GraphQLClient } from "./genericApolloClient";
import { getHasuraJWT, getJWTHeader } from "./jwt";
import { isProxyData, type ProxyGraphQLClient } from "./proxy";

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

  return new Proxy<
    AdminGraphQLClient,
    ProxyGraphQLClient<AdminGraphQLClient, "Admin">
  >(adminApolloClient, {
    get(target, key) {
      const callable = Reflect.get(target, key);

      if (typeof callable !== "function") return callable;

      return (...args: unknown[]) => {
        const lastArg = args.at(-1);

        const [newArgs, proxyData] = isProxyData(lastArg)
          ? [args.slice(0, -1), { ...lastArg, now }]
          : [args, { now }];

        return callable.call(target, ...newArgs, proxyData);
      };
    },
  });
};

/**
 * Admin Apollo Client Callers
 */

export const getAdminApolloClientFromRequest = async (request: Request) => {
  const [now] = await getAdminDataFromFromSession(request);

  return getAdminApolloClient(now);
};
