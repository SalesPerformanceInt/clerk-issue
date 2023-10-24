import objectHash from "object-hash";

export const DEFAULT_KEY = "_";
type DefaultKey = typeof DEFAULT_KEY;

type Entries<K, V> = [...[K, V][], [DefaultKey, V]];

export class MatchedMap<K, V> extends Map<K | DefaultKey, V> {
  constructor(entries: Entries<K, V>) {
    super(entries);
  }

  set(key: K, value: V) {
    const hashKey = (typeof key === "object" ? objectHash(key) : key) as K;

    return super.set(hashKey, value);
  }

  get(key: K): V {
    const hashKey = (typeof key === "object" ? objectHash(key) : key) as K;

    return super.get(hashKey) ?? (super.get("_") as V);
  }
}
