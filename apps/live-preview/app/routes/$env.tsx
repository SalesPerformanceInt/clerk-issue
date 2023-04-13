/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Suspense } from "react";

import { defer, type LoaderArgs } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

import { MatchedMap } from "~/utils/matchedMap";

import { questionItemMock } from "~/mocks/questionItem";
import { getEntry } from "~/models/entry";

import { QuestionItem } from "~/components/QuestionItem";

/**
 * Entry Map
 */

const entryComponentMap = new MatchedMap<
  string | undefined,
  typeof QuestionItem
>([
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
  const mockedEntryData = questionItemMock;

  console.log({ entryData, mockedEntryData });

  return (
    <Suspense fallback={<></>}>
      <Await resolve={entryData}>
        {(entryData) => {
          const Entry = entryComponentMap.get(entryData.content_type?.uid);

          return <Entry entryData={mockedEntryData} />;
        }}
      </Await>
    </Suspense>
  );
}
