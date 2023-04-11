import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getEntry } from "~/models/entry";
import type { QuestionItem } from "~/models/entry/questionItem";

/**
 * Route Loader
 */

export const loader = async ({ request }: LoaderArgs) => {
  const { entryData } = await getEntry<QuestionItem>({ request });

  return json({ entryData });
};

/**
 * Route Component
 */

export default function Index() {
  const { entryData } = useLoaderData<typeof loader>();

  console.log(entryData);

  if (!entryData) return null;

  return (
    <>
      <h2>{entryData.title}</h2>
    </>
  );
}
