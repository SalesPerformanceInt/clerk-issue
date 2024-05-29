import { isRouteErrorResponse, useLocation, useRouteError } from "@remix-run/react"

import Honeybadger from "../utils/honeybadger"

export const makeErrorBoundary = (props: unknown) => () => {
  const error = useRouteError() as any
  const location = useLocation()
  Honeybadger.setContext({
    location,
    error,
    props,
  })
  Honeybadger.notify(`${error?.status} ${error?.statusText}  - ${error?.message}`)

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
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
  } else {
    return <h1>Unknown Error</h1>
  }
}
