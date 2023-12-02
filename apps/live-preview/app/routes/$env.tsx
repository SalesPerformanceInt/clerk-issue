import { Suspense } from "react";
import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Entry, getEntry } from "~/models/entry";

export const loader = async ({ request, params }: LoaderArgs) => {
  const { entryData } = await getEntry({ request, params });

  return json({ entryData });
};

export default function Env() {
  const { entryData } = useLoaderData<typeof loader>();

  return (
    <Suspense fallback={<></>}>
      <Entry entryData={entryData} />
    </Suspense>
  );
}
