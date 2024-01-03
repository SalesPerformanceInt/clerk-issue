import type { LoaderArgs } from "@remix-run/node";
import type { Params } from "@remix-run/react";

import type { LivePreviewQuery, Query } from "contentstack";

import type { QuestionItemLivePreview } from "./questionItem/";
import type { TaxonLivePreview } from "./taxonomy";

/**
 * Entry LP Query
 */

export type EntryLivePreviewQuery = LivePreviewQuery & Pick<Query, "entry_uid">;

/**
 * Entry LP Props
 */

export type GetEntryQueryProps = Pick<LoaderArgs, "request">;

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
