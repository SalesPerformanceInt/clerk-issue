/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */

import { PassThrough } from "stream";

import { renderToPipeableStream } from "react-dom/server";

import { Response, type EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";

import { getCSENV } from "./utils/server/env.server";

global.ENV = getCSENV();

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  return new Promise((resolve) => {
    const { pipe } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onShellReady() {
          const body = new PassThrough();

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );

          pipe(body);
        },
      },
    );
  });
}
