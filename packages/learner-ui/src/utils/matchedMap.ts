export const DEFAULT_KEY = "_";
type DefaultKey = typeof DEFAULT_KEY;

export class MatchedMap<K, V> extends Map<K | DefaultKey, V> {
  set(key: K, value: V) {
    return super.set(key, value);
  }

  get(key: K): V {
    return super.get(key) ?? (super.get("_") as V);
  }
}
