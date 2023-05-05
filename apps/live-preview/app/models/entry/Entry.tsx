import React, { type FC } from "react";

import type { EntryLivePreviewData } from "~/models/entry";

import { QuestionItem } from "~/components/QuestionItem";

const isContentType = <
  ContentType extends EntryLivePreviewData["content_type"]["uid"],
>(
  entry: { content_type: { uid: string } },
  uid: ContentType,
): entry is { content_type: { uid: ContentType } } => {
  return entry.content_type.uid === uid;
};

export const Entry: FC<{ entryData: EntryLivePreviewData }> = ({
  entryData,
}) => {
  if (isContentType(entryData, "questionitem")) {
    return <QuestionItem questionItem={entryData} />;
  }

  return <></>;
};
