export function andThen<T, R>(fn: (a: T extends Promise<infer S> ? S : never) => R): (a: T) => Promise<Awaited<R>> {
  return async (a: T) => {
    return (fn as Function)(await a)
  }
}
