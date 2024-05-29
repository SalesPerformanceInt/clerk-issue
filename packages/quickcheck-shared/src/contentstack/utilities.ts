import type { Expand } from ".."

export type DataCSLP = Expand<{
  "data-cslp": string
}>

type PrimitiveKeys<T, K extends keyof T = keyof T> = K extends unknown
  ? T[K] extends object | undefined
    ? never
    : K
  : never

export type WithLiveData<T> =
  T extends Array<unknown>
    ? WithLiveData<T[number]>[]
    : Expand<
        {
          [K in keyof Omit<T, "$">]: K extends PrimitiveKeys<T> ? T[K] : WithLiveData<T[K]>
        } & {
          $?: {
            [K in keyof Pick<T, PrimitiveKeys<T>>]: DataCSLP
          }
        }
      >
