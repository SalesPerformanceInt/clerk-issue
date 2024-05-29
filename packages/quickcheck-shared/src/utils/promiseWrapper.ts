/**
 * Promise Wrapper Handler
 */

export const promiseWrapper = async <T>(promise: Promise<T>): Promise<[T | null, unknown]> => {
  try {
    return [await promise, null]
  } catch (error) {
    return [null, error]
  }
}

/**
 * Promise Wrapper HOF
 */

type Fn<TArgs extends unknown[], TReturn> = (...args: TArgs) => TReturn

export const withPromiseWrapper =
  <T extends unknown[], U>(fn: Fn<T, Promise<U>>) =>
  (...args: T) =>
    promiseWrapper(fn(...args))
