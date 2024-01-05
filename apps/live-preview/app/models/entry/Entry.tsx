import React, { type FC } from "react";

import { MatchedMap } from "quickcheck-shared";

import { QuestionItem } from "~/components/QuestionItem";

import type { EntryLivePreviewData, EntryType } from "./entry.types";

/**
 * Content Type Predicate
 */

const isContentType = <
  ContentType extends EntryLivePreviewData["content_type"]["uid"],
>(
  entry: { content_type: { uid: string } },
  uid: ContentType,
): entry is { content_type: { uid: ContentType } } => {
  return entry?.content_type?.uid === uid;
};

/**
 * Dynamic Entry
 */

export const Entry: FC<{ entryData: EntryLivePreviewData }> = ({
  entryData,
}) => {
  if (isContentType(entryData, "questionitem")) {
    return <QuestionItem questionItem={entryData} />;
  }

  return <></>;
};

export const entryTypeRouteMap = new MatchedMap<EntryType, string | null>([
  ["questionitem", "questionitem"],
  ["taxon_bottom_up", "taxonomy"],
  ["_", null],
]);
