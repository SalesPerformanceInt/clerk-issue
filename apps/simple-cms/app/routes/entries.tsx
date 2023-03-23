import React from "react";

import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Container } from "accelerate-cms-ui";

import { EntriesDatatable, EntriesSidenav } from "~/components/Entries";

import { entriesMockData, type EntriesType } from "~/data/entries";

export const loader = async ({ request }: LoaderArgs) => {
  const entries: EntriesType[] = await new Promise((res) =>
    res(entriesMockData),
  );

  return json({ entries });
};

export default function Entries() {
  const { entries } = useLoaderData<typeof loader>();

  return (
    <>
      <Container.Main>
        <EntriesSidenav />

        <EntriesDatatable entries={entries} />
      </Container.Main>
    </>
  );
}
