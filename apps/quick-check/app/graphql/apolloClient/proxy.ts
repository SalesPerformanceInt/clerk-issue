/**
 * Proxy Augmentation
 */

declare global {
  interface ProxyConstructor {
    new <TSource extends object, TTarget extends TSource>(target: TSource, handler: ProxyHandler<TSource>): TTarget
  }
}

/**
 * GraphQL Proxy Additional Data
 */

export type GQLProxyData = { now: string }
export type GQLProxyUserData = GQLProxyData & { userId: string }
export type GQLProxyTenantData = GQLProxyData & { tenantId: string }

export type GQLUserTenantData = {
  userId: string
  tenantId: string
}

export type GQLProxyPossibleData = GQLProxyData & Partial<GQLUserTenantData>

export type GQLProxyAllData = Required<GQLProxyPossibleData>

/**
 * Proxy Data Normalization
 */

type ProxyDataSubtypes = GQLProxyUserData | GQLProxyTenantData

type RemoveLastParam<Fn> = Fn extends (...args: infer Args) => infer Res
  ? (...args: Args extends [...infer Rest, unknown?] ? Rest : Args) => Res
  : never

type OmitFromLastParam<Fn> = Fn extends (...args: infer Args) => infer Res
  ? (
      ...args: Args extends [...infer Rest, infer Last]
        ? Last extends ProxyDataSubtypes
          ? [...rest: Rest, proxyData: Omit<Last, "now">]
          : Rest
        : Args
    ) => Res
  : never

/**
 * Proxy Data Mapping
 */

type ProxyDataMap<Fn> = {
  User: RemoveLastParam<Fn>
  Admin: OmitFromLastParam<Fn>
}

type GQLProxyClients<Fn> = keyof ProxyDataMap<Fn>

export type ProxyGraphQLClient<Fn, Client extends GQLProxyClients<Fn>> = {
  [K in keyof Fn]: Fn[K] extends (...args: infer Args) => infer Res ? ProxyDataMap<Fn[K]>[Client] : Fn[K]
}

/**
 * Proxy Guard
 */

export const isProxyData = (data: unknown): data is ProxyDataSubtypes => {
  if (typeof data !== "object" || data === null) return false

  return "userId" in data || "tenantId" in data || "now" in data
}

/**
 * Create GraphQL Proxy
 */

export const createGraphQLProxy = <TSource extends object, TTarget extends TSource>(
  source: TSource,
  sessionData: GQLProxyPossibleData,
) => {
  return new Proxy<TSource, TTarget>(source, {
    get(target, key) {
      const callable = Reflect.get(target, key)

      if (typeof callable !== "function") return callable

      return (...args: unknown[]) => {
        const lastArg = args.at(-1)

        const [newArgs, proxyData] = isProxyData(lastArg)
          ? [args.slice(0, -1), { ...lastArg, ...sessionData }]
          : [args, sessionData]

        return callable.call(target, ...newArgs, proxyData)
      }
    },
  })
}
