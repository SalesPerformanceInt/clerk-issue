/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Container } from "accelerate-cms-ui";

import { graphQLClient } from "~/utils/server";

import { EntriesDatatable, EntriesSidenav } from "~/components/Entries";

import { entriesMockData, type EntriesType } from "~/data/entries";
import {
  getAllQuestionItems,
  type AllQuestionItems,
} from "~/models/questionItem";

export const loader = async ({ request }: LoaderArgs) => {
  const entries: EntriesType[] = await new Promise((res) =>
    res(entriesMockData),
  );

  const { data: questionItems } = await graphQLClient.query<AllQuestionItems>({
    query: getAllQuestionItems(),
  });

  return json({ entries, questionItems });
};

export default function Entries() {
  const { entries, questionItems } = useLoaderData<typeof loader>();

  console.log(questionItems);

  return (
    <>
      <Container.Main>
        <EntriesSidenav />

        <EntriesDatatable entries={entries} />
      </Container.Main>
    </>
  );
}
