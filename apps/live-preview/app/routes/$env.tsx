/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Suspense } from "react";

import { defer, type LoaderArgs } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

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

export const loader = ({ request, params }: LoaderArgs) => {
  const entryDataPromise = getEntry({ request, params });

  return defer({ entryDataPromise });
};

/**
 * Route Component
 */

export default function Env() {
  const { entryDataPromise } = useLoaderData<typeof loader>();

  return (
    <Suspense fallback={<></>}>
      <Await resolve={entryDataPromise}>
        {({ entryData }) => {
          const currentEntryData = entryData ?? questionItemMock;

          const Entry = entryComponentMap.get(
            currentEntryData.content_type?.uid,
          );

          return <Entry entryData={currentEntryData} />;
        }}
      </Await>
    </Suspense>
  );
}
