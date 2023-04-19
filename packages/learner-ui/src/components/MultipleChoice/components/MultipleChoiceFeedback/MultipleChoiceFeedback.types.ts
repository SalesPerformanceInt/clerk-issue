import type { Expand } from "~/utils/expand";

import type { MultipleChoiceProps } from "../../MultipleChoice.types";

export type MultipleChoiceFeedbackProps = Expand<
  {
    feedback: boolean;
    currentTopic: string;
    totalScore: number;
    topicPercentage: number;
  } & Pick<MultipleChoiceProps, "selected">
>;
