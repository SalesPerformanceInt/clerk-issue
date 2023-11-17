import { describe, expect, test } from "vitest";

import { promiseWrapper, withPromiseWrapper } from "./promiseWrapper";

describe("promiseWrapper", () => {
  test("resolves promise with value", async () => {
    const [result, error] = await promiseWrapper(Promise.resolve("hello"));
    expect(result).toBe("hello");
    expect(error).toBeNull();
  });

  test("rejects promise with error", async () => {
    const [result, error] = await promiseWrapper(
      Promise.reject(new Error("oops")),
    );
    expect(result).toBeNull();
    expect(error).toEqual(new Error("oops"));
  });
});

describe("withPromiseWrapper", () => {
  test("wraps a function that returns a promise", async () => {
    const fn = withPromiseWrapper(async (x: number, y: number) => x + y);
    const [result, error] = await fn(2, 3);
    expect(result).toBe(5);
    expect(error).toBeNull();
  });

  test("wraps a function that throws an error", async () => {
    const fn = withPromiseWrapper(async (x: number, y: number) => {
      throw new Error("oops");
    });
    const [result, error] = await fn(2, 3);
    expect(result).toBeNull();
    expect(error).toEqual(new Error("oops"));
  });
});
