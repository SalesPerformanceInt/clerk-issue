import React, { startTransition, StrictMode } from "react"
import ReactDOM from "react-dom"
import { hydrateRoot } from "react-dom/client"
import { RemixBrowser } from "@remix-run/react"


if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react")
  axe(React, ReactDOM, 1000)
}

async function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
        <StrictMode>
          <RemixBrowser />
        </StrictMode>,
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1)
}
