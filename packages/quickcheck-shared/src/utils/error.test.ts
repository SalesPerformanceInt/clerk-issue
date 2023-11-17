import { describe, expect, test } from "vitest";

import { getErrorMessage, simpleErrorResponse } from "./error";

describe("getErrorMessage", () => {
  test("returns the error message when passed an Error object", () => {
    const error = new Error("Test error message");
    const errorMessage = getErrorMessage(error);
    expect(errorMessage).toEqual("Test error message");
  });

  test("returns the error message when passed an object with a message property", () => {
    const error = { message: "Test error message" };
    const errorMessage = getErrorMessage(error);
    expect(errorMessage).toEqual("Test error message");
  });

  test("returns the string representation of the error when passed any other value", () => {
    const error = 123;
    const errorMessage = getErrorMessage(error);
    expect(errorMessage).toEqual("123");
  });
});
