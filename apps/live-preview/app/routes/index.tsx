import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { addEditableTags } from "@contentstack/utils";
import type { LivePreviewQuery, Query } from "contentstack";

import { contentStackClient } from "~/utils/server";

/**
 * Route Loader
 */

export const loader = async ({ request }: LoaderArgs) => {
  const params = new URL(request.url).searchParams;
  const contentStackEntry = Object.fromEntries(
    params.entries(),
  ) as unknown as LivePreviewQuery & Pick<Query, "entry_uid">;

  const contentStackEntryData = await contentStackClient
    .ContentType(contentStackEntry.content_type_uid)
    .Entry(contentStackEntry.entry_uid)
    .toJSON()
    .fetch();

  contentStackClient.livePreviewQuery(contentStackEntry);

  addEditableTags(
    contentStackEntryData,
    contentStackEntry.content_type_uid,
    true,
  );

  return json({ contentStackEntryData });
};

/**
 * Route Component
 */

export default function Index() {
  const { contentStackEntryData } = useLoaderData<typeof loader>();

  console.log(contentStackEntryData);

  return (
    <>
      <h2 {...contentStackEntryData.$.title}>{contentStackEntryData.title}</h2>
    </>
  );
}
