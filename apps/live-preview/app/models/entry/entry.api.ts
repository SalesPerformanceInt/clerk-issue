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

// TODO: Include __typename
const getEntryData = async ({ entryQuery, params }: GetEntryDataProps) => {
  const contentStackAPI = contentStackClient({ environment: params.env });

  contentStackAPI.livePreviewQuery(entryQuery);

  const entryData = (await contentStackAPI
    .ContentType(entryQuery.content_type_uid)
    .Entry(entryQuery.entry_uid)
    .includeContentType()
    .includeReference(["topic", "topic.parent_taxonomy"])
    .toJSON()
    .fetch()) as EntryLivePreviewData;

  return { entryData };
};

/**
 * Get Entry
 */

export const getEntry = async ({ request, params }: GetEntryProps) => {
  const { entryQuery } = getEntryQuery({ request });

  const { entryData } = await getEntryData({ entryQuery, params });

  addEditableTags(entryData, entryQuery.content_type_uid, true);

  return { entryData };
};
