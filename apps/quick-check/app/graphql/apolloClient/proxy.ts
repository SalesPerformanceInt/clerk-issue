/**
 * Proxy Augmentation
 */

declare global {
  interface ProxyConstructor {
    new <TSource extends object, TTarget extends object>(
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
export type GQLAdminProxyData = Omit<GQLProxyData, "now">;

/**
 * Proxy Data Normalization
 */

type RemoveLastParam<Fn> = Fn extends (...args: infer Args) => infer Res
  ? (...args: Args extends [...infer Rest, unknown?] ? Rest : Args) => Res
  : never;

export type ProxyGraphQLClient<Fn> = {
  [K in keyof Fn]: Fn[K] extends (...args: infer Args) => infer Res
    ? RemoveLastParam<Fn[K]>
    : Fn[K];
};

/**
 * Proxy Guard
 */

export const isProxyData = (data: unknown): data is GQLAdminProxyData => {
  if (typeof data !== "object" || data === null) return false;

  return "userId" in data;
};
