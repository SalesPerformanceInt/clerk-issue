/**
 * Proxy Augmentation
 */

declare global {
  interface ProxyConstructor {
    new <TSource extends object, TTarget extends TSource>(
      target: TSource,
      handler: ProxyHandler<TSource>,
    ): TTarget;
  }
}

/**
 * GraphQL Proxy Additional Data
 */

export type GQLProxyData = {
  now: string;
  userId: string;
  tenantId: string;
};

export type GQLUserProxyData = Omit<GQLProxyData, "tenantId">;
export type GQLTenantProxyData = Omit<GQLProxyData, "userId">;

export type GQLProxyClients = "User" | "Admin";

/**
 * Proxy Data Normalization
 */

type RemoveLastParam<Fn> = Fn extends (...args: infer Args) => infer Res
  ? (...args: Args extends [...infer Rest, unknown?] ? Rest : Args) => Res
  : never;

type OmitFromLastParam<Fn> = Fn extends (...args: infer Args) => infer Res
  ? (
      ...args: Args extends [...infer Rest, infer Last]
        ? [...rest: Rest, proxyData: Omit<Last, "now">]
        : Args extends [...infer Rest, (infer Last)?]
        ? [...rest: Rest, proxyData?: Omit<Last, "now">]
        : Args
    ) => Res
  : never;

/**
 * Proxy Data Mapping
 */

type ProxyDataMap<Fn> = {
  User: RemoveLastParam<Fn>;
  Admin: OmitFromLastParam<Fn>;
};

export type ProxyGraphQLClient<Fn, Client extends GQLProxyClients> = {
  [K in keyof Fn]: Fn[K] extends (...args: infer Args) => infer Res
    ? ProxyDataMap<Fn[K]>[Client]
    : Fn[K];
};

/**
 * Proxy Guard
 */

export const isProxyData = (data: unknown): data is GQLProxyData => {
  if (typeof data !== "object" || data === null) return false;

  return "userId" in data || "tenantId" in data || "now" in data;
};
