import { contentStackManagementAPI } from "~/utils/server";

import type { Entries, Entry } from "./entry.types";

/**
 * Get all entries
 */

type GetAllEntries = {
  contentTypeUid: string;
};

export const getAllEntries = async ({ contentTypeUid }: GetAllEntries) => {
  const entries = await contentStackManagementAPI
    .contentType(contentTypeUid)
    .entry()
    .query({ include_publish_details: true })
    .find();

  return entries as Entries;
};

/**
 * Get Single Entry
 */

type GetSingleEntry = {
  entryUid: string;
} & GetAllEntries;

export const getEntry = async ({
  contentTypeUid,
  entryUid,
}: GetSingleEntry) => {
  const entry = await contentStackManagementAPI
    .contentType(contentTypeUid)
    .entry(entryUid)
    .fetch({ include_publish_details: true });

  return entry as Entry;
};
