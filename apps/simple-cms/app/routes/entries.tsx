import React from "react";

import type { LoaderArgs } from "@remix-run/node";

import { typedjson, useTypedLoaderData } from "remix-typedjson";

import { Container } from "accelerate-cms-ui";

import { mockTheme } from "~/utils/themes";

import { getAllEntries } from "~/models/entry/entry.api";

import { EntriesDatatable, EntriesSidenav } from "~/components/Entries";

/**
 * TODO: Need to fetch the Content Types
 */

/**
 * Route Loader
 */

export const loader = async ({ request }: LoaderArgs) => {
  const contentItems = await getAllEntries({ contentTypeUid: "questionitem" });

  return typedjson({ contentItems, theme: mockTheme });
};

/**
 * Route Component
 */

export default function Entries() {
  const { contentItems } = useTypedLoaderData<typeof loader>();

  return (
    <>
      <Container.Main>
        <EntriesSidenav />

        <EntriesDatatable entries={contentItems} />
      </Container.Main>
    </>
  );
}
