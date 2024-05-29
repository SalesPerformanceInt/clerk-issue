import { Expand } from "./expand"

export type RequireKeys<T, K extends keyof T> = Expand<Omit<T, K> & Required<Pick<T, K>>>
