import { Suspense } from "react";

import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { questionItemMock } from "quickcheck-shared";

import { Entry, getEntry } from "~/models/entry";

export const loader = async ({ request, params }: LoaderArgs) => {
  const { entryData } = await getEntry({ request, params });

  return json({ entryData });
};

export default function Env() {
  const { entryData } = useLoaderData<typeof loader>();

  const currentEntryData = entryData ?? questionItemMock;

  return (
    <Suspense fallback={<></>}>
      <Entry entryData={currentEntryData} />
    </Suspense>
  );
}
