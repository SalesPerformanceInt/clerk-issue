import type { UniqueIdentifier } from "@dnd-kit/core";
import type { ReorderWordsQuestion } from "~/contentstack";

import type { Expand } from "~/utils/expand";

export type ReorderWordsProps = Expand<
  Pick<ReorderWordsQuestion, "reorderwordsquestion">
>;

export type ReorderableItem = {
  id: UniqueIdentifier;
  text: string;
};

export type ReorderableWords = {
  answer: ReorderableItem[];
  words: ReorderableItem[];
};
