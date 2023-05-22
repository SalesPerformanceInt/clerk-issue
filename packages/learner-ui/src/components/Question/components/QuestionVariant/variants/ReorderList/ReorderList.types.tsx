import type {
  ReorderListQuestion,
  ReorderListQuestionItem,
} from "~/contentstack";

import type { Expand } from "~/utils/expand";

export type ReorderableListItem = Pick<
  ReorderListQuestionItem["item"],
  "text" | "$"
> & {
  id: string | number;
};

export type ReorderListProps = Expand<
  Pick<ReorderListQuestion, "reorderlistquestion">
>;
