/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Suspense } from "react";

import { defer, type LoaderArgs } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

import { MatchedMap } from "~/utils/matchedMap";

import { getEntry } from "~/models/entry";

import { QuestionItem } from "~/components/QuestionItem";

/**
 * Entry Map
 */

const entryComponentMap = new MatchedMap<string, typeof QuestionItem>([
  ["questionitem", QuestionItem],
  ["_", () => <></>],
]);

/**
 * Route Loader
 */

export const loader = async ({ request, params }: LoaderArgs) => {
  const { entryData } = await getEntry({ request, params });

  return defer({ entryData });
};

/**
 * Route Component
 */

export default function Env() {
  const { entryData } = useLoaderData<typeof loader>();

  console.log({ entryData });

  return (
    <Suspense fallback={<></>}>
      <Await resolve={entryData}>
        {(entryData) => {
          const Entry = entryComponentMap.get(entryData.content_type.uid);

          return <Entry entryData={entryData} />;
        }}
      </Await>
    </Suspense>
  );
}
