import { redirect, type LoaderArgs } from "@remix-run/node";

import { typedjson, useTypedLoaderData } from "remix-typedjson";

import { getEntryFromRequest } from "~/models/entry";

/**
 * Loader
 */

export const loader = async ({ request, params }: LoaderArgs) => {
  const { entryRoute } = await getEntryFromRequest({ request });

  if (!entryRoute) return typedjson({});

  return redirect(`/${params.env}/${entryRoute}`);
};

/**
 * Route Component
 */

export default function TaxonomyRoute() {
  const {} = useTypedLoaderData<typeof loader>();

  return <></>;
}
