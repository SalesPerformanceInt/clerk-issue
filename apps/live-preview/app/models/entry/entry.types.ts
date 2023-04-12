import type { LoaderArgs } from "@remix-run/node";
import type { Params } from "@remix-run/react";

import type { LivePreviewQuery, Query } from "contentstack";

import type { DataCslp } from "~/utils/server";

import type { PublishDetail } from "../publishDetails";
import type { Taxonomy } from "../taxonomy";

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
  created_at: string;
  created_by: string;
  content_type: {
    uid: string;
  };
  lastModifiedDate: string;
  locale: string;
  publish_details: PublishDetail[];
  tags: string[];
  taxonomy: Taxonomy[];
  title: string;
  uid: string;
  updated_at: string;
  updated_by: string;
  $?: {
    _in_progress: DataCslp;
    _version: DataCslp;
    created_at: DataCslp;
    created_by: DataCslp;
    lastModifiedDate: DataCslp;
    locale: DataCslp;
    title: DataCslp;
    uid: DataCslp;
    updated_at: DataCslp;
    updated_by: DataCslp;
  };
};
