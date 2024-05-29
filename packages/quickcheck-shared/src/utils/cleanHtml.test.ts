import { describe, expect, test } from "vitest"

import { cleanHTML } from "./cleanHtml"

test("tests cleanHTML on basic html", () => {
  const html = `<p>Hello you <b>beautiful</b> child.</p>`
  expect(cleanHTML(html)).toEqual(html)
})

test("tests cleanHTML on with class and script", () => {
  const html = `<p class="sdfsdf">Hello you <b>beautiful</b> child <script>Funky</script>.</p>`
  expect(cleanHTML(html)).toEqual(html)
})

test("tests cleanHTML on with style attr", () => {
  const html = `<p style="sdfsdf">Hello you <b>beautiful</b> child.</p>`
  expect(cleanHTML(html)).toEqual(`<p>Hello you <b>beautiful</b> child.</p>`)
})
