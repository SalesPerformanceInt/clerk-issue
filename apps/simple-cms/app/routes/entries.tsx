/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Container } from "accelerate-cms-ui";

import { EntriesDatatable, EntriesSidenav } from "~/components/Entries";

import { getAllQuestionItems } from "~/models/questionItem";

/**
 * TODO: Need to fetch the Content Type
 * TODO: Publish Status only returns an id currently
 */

/**
 * Route Loader
 */

export const loader = async ({ request }: LoaderArgs) => {
  const { questionItems } = await getAllQuestionItems();

  return json({ questionItems });
};

/**
 * Route Component
 */

export default function Entries() {
  const { questionItems } = useLoaderData<typeof loader>();

  return (
    <>
      <Container.Main>
        <EntriesSidenav />

        <EntriesDatatable entries={questionItems} />
      </Container.Main>
    </>
  );
}
