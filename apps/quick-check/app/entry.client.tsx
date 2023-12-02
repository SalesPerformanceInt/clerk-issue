import React, { startTransition, StrictMode } from "react";
import ReactDOM from "react-dom";
import { hydrateRoot } from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { RemixBrowser } from "@remix-run/react";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend, { HttpBackendOptions } from "i18next-http-backend";
import { getInitialNamespaces } from "remix-i18next";

import { getBackendOptions, i18nConfig } from "quickcheck-shared";

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

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
    });

  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      </I18nextProvider>,
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
