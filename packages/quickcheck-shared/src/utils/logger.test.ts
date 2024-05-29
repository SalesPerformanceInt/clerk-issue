import { describe, expect, test, vi } from "vitest"

import { logError } from "./logger"

describe("logError", () => {
  test("logs error with message", () => {
    const error = new Error("Something went wrong")
    const message = "Failed to do something"
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})
    const returnedValue = logError({ error, log: message })
    expect(consoleSpy).toHaveBeenCalledWith(`ERROR - ${message}`, error)
    expect(returnedValue).toBeNull()
    consoleSpy.mockRestore()
  })

  test("logs error without message", () => {
    const error = new Error("Something went wrong")
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})
    const returnedValue = logError({ error })
    expect(consoleSpy).toHaveBeenCalledWith(`ERROR`, error)
    expect(returnedValue).toBeNull()
    consoleSpy.mockRestore()
  })

  test("returns value", () => {
    const error = new Error("Something went wrong")
    const value = { foo: "bar" }
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})
    const returnedValue = logError({ error, returnedValue: value })
    expect(consoleSpy).toHaveBeenCalledWith(`ERROR`, error)
    expect(returnedValue).toEqual(value)
    consoleSpy.mockRestore()
  })
})
