import { startTransition, StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import { I18nextProvider, initReactI18next } from "react-i18next"
import { RemixBrowser } from "@remix-run/react"

import contentStackLivePreview from "@contentstack/live-preview-utils"
import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend, { HttpBackendOptions } from "i18next-http-backend"
import { getInitialNamespaces } from "remix-i18next"

import { getBackendOptions, i18nConfig } from "quickcheck-shared"

void contentStackLivePreview.init()

async function hydrate() {
  await i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init<HttpBackendOptions>({
      ...i18nConfig,
      debug: true,
      ns: getInitialNamespaces(),
      backend: getBackendOptions(window.ENV),
      detection: {
        order: ["htmlTag"],
        caches: [],
      },
    })

  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      </I18nextProvider>,
    )
  })
}

if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1)
}
