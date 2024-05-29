import { describe, expect, test } from "vitest"

import { getUserInitials } from "./getUserInitials"

describe("getUserInitials", () => {
  test("returns initials for first and last name", () => {
    const user = { first_name: "Erlich", last_name: "Bachman" }
    expect(getUserInitials(user)).toEqual("EB")
  })

  test("returns initials for first and last name with spaces", () => {
    const user = { first_name: "Baron   ", last_name: "Von Shtupper" }
    expect(getUserInitials(user)).toEqual("BV")
  })

  test("returns initial for first name only", () => {
    const user = { first_name: "Madonna", last_name: "" }
    expect(getUserInitials(user)).toEqual("M")
  })
})
