import React from "react";

import type { QuestionItemData, QuestionItemProps } from "./QuestionItem.types";

export const QuestionItem = ({ entryData }: QuestionItemProps) => {
  const questionItem = entryData as QuestionItemData;

  return <h2 {...questionItem.$?.title}>{questionItem.title}</h2>;
};
