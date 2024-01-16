import type { Params } from "@remix-run/react";

import type { LivePreviewQuery, Query } from "contentstack";

import type { QuestionItemLivePreview } from "./questionItem/";
import type { TaxonLivePreview } from "./taxonomy";

/**
 * Entry Types
 */

export type EntryType = "questionitem" | "taxon_bottom_up";

/**
 * Entry LP Query
 */

export type EntryLivePreviewQuery = LivePreviewQuery &
  Pick<Query, "entry_uid"> & {
    content_type_uid: EntryType;
  };

/**
 * Entry LP Props
 */

export type GetEntryQueryProps = {
  request: Request;
};

export type GetEntryDataProps = {
  entryQuery: EntryLivePreviewQuery;
  params: Params<string>;
};

export type GetEntryProps = GetEntryQueryProps &
  Pick<GetEntryDataProps, "params">;

/**
 * Entry LP Union
 */

export type EntryLivePreviewData = QuestionItemLivePreview | TaxonLivePreview;
