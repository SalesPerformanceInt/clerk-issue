import { entryTypeRouteMap } from "./Entry";
import type { EntryLivePreviewQuery, GetEntryQueryProps } from "./entry.types";

/**
 * Get Entry Query
 */

export const getEntryQuery = ({ request }: GetEntryQueryProps) => {
  const params = new URL(request.url).searchParams;

  const entryQuery = Object.fromEntries(
    params.entries(),
  ) as unknown as EntryLivePreviewQuery;

  return { entryQuery };
};

/**
 * Get Entry
 */

export const getEntryFromRequest = async ({ request }: GetEntryQueryProps) => {
  const { entryQuery } = getEntryQuery({ request });

  const entryRoute = entryTypeRouteMap.get(entryQuery.content_type_uid);

  return { entryRoute };
};
