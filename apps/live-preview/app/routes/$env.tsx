/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Suspense } from "react";

import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { MatchedMap } from "accelerate-learner-ui";

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

  return json({ entryData });
};

/**
 * Route Component
 */

export default function Env() {
  const { entryData } = useLoaderData<typeof loader>();

  const currentEntryData = entryData ?? questionItemMock;

  const Entry = entryComponentMap.get(currentEntryData.content_type?.uid);

  return (
    <Suspense fallback={<></>}>
      <Entry entryData={currentEntryData} />
    </Suspense>
  );
}
