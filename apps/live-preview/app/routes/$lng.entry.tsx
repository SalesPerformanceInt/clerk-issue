import { redirect, type LoaderFunctionArgs } from "@remix-run/node"

import { typedjson, useTypedLoaderData } from "remix-typedjson"

import { getEntryFromRequest } from "~/models/entry"

/**
 * Loader
 */

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const { entryRoute } = await getEntryFromRequest({ request })

  if (!entryRoute) return typedjson({})

  return redirect(`/${params.lng}/${entryRoute}`)
}

/**
 * Route Component
 */

export default function TaxonomyRoute() {
  const {} = useTypedLoaderData<typeof loader>()

  return <></>
}
