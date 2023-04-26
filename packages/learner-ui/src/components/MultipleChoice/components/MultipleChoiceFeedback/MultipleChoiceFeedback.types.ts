import type { Expand } from "~/utils/expand";

import type { MCSelected } from "../../MultipleChoice.types";

export type MultipleChoiceFeedbackProps = Expand<{
  feedback: boolean;
  currentTopic: string;
  totalScore: number;
  topicPercentage: number;
  selected: MCSelected;
}>;
