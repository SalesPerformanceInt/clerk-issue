import { PassThrough } from "stream"
import { renderToPipeableStream } from "react-dom/server"
import { I18nextProvider, initReactI18next } from "react-i18next"
import { createReadableStreamFromReadable, type EntryContext } from "@remix-run/node"
import { RemixServer } from "@remix-run/react"

import { createInstance } from "i18next"
import Backend, { HttpBackendOptions } from "i18next-http-backend"
import { isbot } from "isbot"

import { getBackendOptions, i18nConfig } from "quickcheck-shared"

import { CONTENTSTACK_ENVS } from "./utils/envs.server"
import { remixI18next } from "./utils/i18next.server"

const ABORT_DELAY = 5000

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const callbackName = isbot(request.headers.get("user-agent") ?? "") ? "onAllReady" : "onShellReady"

  const instance = createInstance()
  const lng = await remixI18next.getLocale(request)
  const ns = remixI18next.getRouteNamespaces(remixContext)

  await instance
    .use(initReactI18next)
    .use(Backend)
    .init<HttpBackendOptions>({
      ...i18nConfig,
      lng,
      ns,
      backend: getBackendOptions(CONTENTSTACK_ENVS),
    })

  return new Promise((resolve, reject) => {
    let didError = false

    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { pipe, abort } = renderToPipeableStream(
      <I18nextProvider i18n={instance}>
        <RemixServer context={remixContext} url={request.url} abortDelay={ABORT_DELAY} />
      </I18nextProvider>,
      {
        [callbackName]: () => {
          const body = new PassThrough()
          const stream = createReadableStreamFromReadable(body)

          responseHeaders.set("Content-Type", "text/html")

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            }),
          )

          pipe(body)
        },
        onShellError(error: unknown) {
          reject(error)
        },
        onError(error: unknown) {
          didError = true

          console.error(error)
        },
      },
    )

    setTimeout(abort, ABORT_DELAY)
  })
}
