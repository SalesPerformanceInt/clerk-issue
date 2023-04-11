import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";

import { RemixBrowser } from "@remix-run/react";

import contentStackLivePreview from "@contentstack/live-preview-utils";

void contentStackLivePreview.init();

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>,
    );
  });
}

if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1);
}
