import { describe, expect, test } from "vitest"

import { stripHTML } from "./stripHTML"

describe("stripHTML", () => {
  test("removes HTML tags from a string", () => {
    const html = "<p>Hello, world!</p>"
    expect(stripHTML(html)).toEqual("Hello, world!")
  })

  test("returns undefined if input is undefined", () => {
    expect(stripHTML(undefined)).toBeUndefined()
  })

  test("returns an empty string if input is an empty string", () => {
    expect(stripHTML("")).toEqual("")
  })

  test("does not modify a string with no HTML tags", () => {
    const text = "This is a plain text string."
    expect(stripHTML(text)).toEqual(text)
  })

  test("removes multiple HTML tags from a string", () => {
    const html = "<p>Hello, <em>world</em>!</p>"
    expect(stripHTML(html)).toEqual("Hello, world!")
  })

  test("removes HTML tags with attributes from a string", () => {
    const html = '<a href="https://example.com">Example</a>'
    expect(stripHTML(html)).toEqual("Example")
  })
})
