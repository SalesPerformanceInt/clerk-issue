import React from "react";

import { type LoaderArgs } from "@remix-run/node";

import { typedjson, useTypedLoaderData } from "remix-typedjson";

import { Container } from "accelerate-cms-ui";

import { getTheme, useToggleTheme } from "~/utils/themes";

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

  const { theme } = getTheme({ request });

  return typedjson({
    contentItems,
    ...(theme && { theme }),
  });
};

/**
 * Route Component
 */

export default function Entries() {
  const { contentItems } = useTypedLoaderData<typeof loader>();

  const { toggleTheme } = useToggleTheme();

  return (
    <>
      <Container.Main>
        <EntriesSidenav />

        <EntriesDatatable entries={contentItems} newEntry={toggleTheme} />
      </Container.Main>
    </>
  );
}
