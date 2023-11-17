import { describe, expect, test } from "vitest";

import { MatchedMap } from "./matchedMap";

describe("MatchedMap", () => {
  test("can set and get values by key", () => {
    const map = new MatchedMap<string, number>([
      ["foo", 1],
      ["bar", 2],
    ]);
    map.set("baz", 3);
    expect(map.get("foo")).toBe(1);
    expect(map.get("bar")).toBe(2);
    expect(map.get("baz")).toBe(3);
  });

  test("can set and get values by object key", () => {
    const map = new MatchedMap<{ id: number }, string>([
      [{ id: 1 }, "foo"],
      [{ id: 2 }, "bar"],
    ]);
    map.set({ id: 3 }, "baz");
    expect(map.get({ id: 1 })).toBe("foo");
    expect(map.get({ id: 2 })).toBe("bar");
    expect(map.get({ id: 3 })).toBe("baz");
  });

  test("returns default value for unmatched key", () => {
    const map = new MatchedMap<string, number>([
      ["foo", 1],
      ["bar", 2],
    ]);
    expect(map.get("baz")).toBeUndefined();
    expect(map.get("_")).toBeUndefined();
    map.set("_", 3);
    expect(map.get("baz")).toBe(3);
    expect(map.get("_")).toBe(3);
  });
});
