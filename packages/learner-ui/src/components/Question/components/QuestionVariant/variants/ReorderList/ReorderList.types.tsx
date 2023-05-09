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
  {
    currentTopic: string;
    totalScore: number;
    topicPercentage: number;
  } & Pick<ReorderListQuestion, "reorderlistquestion">
>;
