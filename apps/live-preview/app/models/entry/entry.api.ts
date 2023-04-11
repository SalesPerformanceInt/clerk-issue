import { addEditableTags } from "@contentstack/utils";

import { contentStackClient } from "~/utils/server";

import type {
  EntryLivePreviewData,
  EntryLivePreviewQuery,
  GetEntryDataProps,
  GetEntryProps,
  GetEntryQueryProps,
} from "./entry.types";

/**
 * Get Entry Query
 */

const getEntryQuery = ({ request }: GetEntryQueryProps) => {
  const params = new URL(request.url).searchParams;

  const entryQuery = Object.fromEntries(
    params.entries(),
  ) as unknown as EntryLivePreviewQuery;

  return { entryQuery };
};

/**
 * Get Entry Data
 */

const getEntryData = async <T extends EntryLivePreviewData>({
  entryQuery,
}: GetEntryDataProps) => {
  const contentStackAPI = contentStackClient();

  contentStackAPI.livePreviewQuery(entryQuery);

  const entryData = (await contentStackAPI
    .ContentType(entryQuery.content_type_uid)
    .Entry(entryQuery.entry_uid)
    .toJSON()
    .fetch()) as T;

  return { entryData };
};

/**
 * Get Entry
 */

export const getEntry = async <T extends EntryLivePreviewData>({
  request,
}: GetEntryProps) => {
  const { entryQuery } = getEntryQuery({ request });

  const { entryData } = await getEntryData<T>({ entryQuery });

  addEditableTags(entryData, entryQuery.content_type_uid, true);

  return { entryData };
};
