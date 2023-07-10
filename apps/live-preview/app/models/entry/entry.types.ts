import type { LoaderArgs } from "@remix-run/node";
import type { Params } from "@remix-run/react";

import type { LivePreviewQuery, Query } from "contentstack";
import type { QuestionItem, Taxon } from "quickcheck-shared";

export type EntryLivePreviewQuery = LivePreviewQuery & Pick<Query, "entry_uid">;

export type GetEntryQueryProps = Pick<LoaderArgs, "request">;

export type GetEntryDataProps = {
  entryQuery: EntryLivePreviewQuery;
  params: Params<string>;
};

export type GetEntryProps = GetEntryQueryProps &
  Pick<GetEntryDataProps, "params">;

type WithContentType<T, ContentType extends string> = T & {
  content_type: { uid: ContentType };
};

export type QuestionItemLivePreview = WithContentType<
  QuestionItem,
  "questionitem"
>;
export type TaxonLivePreview = WithContentType<Taxon, "taxon_bottom_up">;

export type EntryLivePreviewData = QuestionItemLivePreview | TaxonLivePreview;
