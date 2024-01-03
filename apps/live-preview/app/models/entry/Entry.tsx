import React, { type FC } from "react";

import { QuestionItem } from "~/components/QuestionItem";

import type { EntryLivePreviewData } from "./entry.types";

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
