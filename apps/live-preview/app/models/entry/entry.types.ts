import type { LoaderArgs } from "@remix-run/node";
import type { Params } from "@remix-run/react";

import type { LivePreviewQuery, Query } from "contentstack";

import type { DataCslp } from "~/utils/server";

/**
 * API
 */

export type EntryLivePreviewQuery = LivePreviewQuery & Pick<Query, "entry_uid">;

export type GetEntryQueryProps = Pick<LoaderArgs, "request">;

export type GetEntryDataProps = {
  entryQuery: EntryLivePreviewQuery;
  params: Params<string>;
};

export type GetEntryProps = GetEntryQueryProps &
  Pick<GetEntryDataProps, "params">;

/**
 * Entry Live Preview Data
 */

export type EntryLivePreviewData = {
  title: string;
  uid?: string;
  content_type?: { uid: string };
  $?: { title: DataCslp };
};
