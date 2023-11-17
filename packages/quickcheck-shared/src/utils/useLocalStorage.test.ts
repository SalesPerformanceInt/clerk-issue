import { act, renderHook } from "@testing-library/react-hooks";
import { afterEach, describe, expect, test } from "vitest";

import { useLocalStorage } from "./useLocalStorage";

const localStorageMock = function () {
  let store: any = {};

  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: any) {
      store[key] = value.toString();
    },
    removeItem: function (key: string) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
};
describe("useLocalStorage", () => {
  // @vitest-environment happy-dom
  // @ts-ignore
  global.localStorage = localStorageMock();

  afterEach(() => {
    localStorage.clear();
  });
  test("loads value from localStorage on mount", () => {
    const key = "test-key";
    const value = "test-value";
    localStorage.setItem(key, value);

    const { result } = renderHook(() => useLocalStorage<string>(key));

    expect(result.current.storage).toEqual(value);
    expect(result.current.loaded).toBe(true);
  });

  test("sets value in localStorage and updates state", () => {
    const key = "test-key";
    const value = "test-value";
    const { result } = renderHook(() => useLocalStorage<string>(key));

    act(() => {
      result.current.setLocalStorage(value);
    });

    expect(localStorage.getItem(key)).toEqual(value);
    expect(result.current.storage).toEqual(value);
  });
});
