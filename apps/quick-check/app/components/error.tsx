import { isRouteErrorResponse, useLocation, useRouteError } from "@remix-run/react"

import { isError, isObject } from "remeda"

import Honeybadger from "../utils/honeybadger"

export const makeErrorBoundary = (props: unknown) => () => {
  const error = useRouteError()
  const location = useLocation()
  Honeybadger.setContext({
    location,
    error,
    props,
  })

  const message = isObject(error) && "message" in error ? error.message : null

  if (isRouteErrorResponse(error)) {
    Honeybadger.notify(`${error?.status} ${error?.statusText} - ${message}`)

    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{JSON.stringify(error.data)}</p>
      </div>
    )
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    )
  }

  return <div>{`Unknown Error: ${JSON.stringify(error)}`}</div>
}
