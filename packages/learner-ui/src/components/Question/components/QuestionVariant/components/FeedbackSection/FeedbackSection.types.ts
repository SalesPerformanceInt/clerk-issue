import type { Expand } from "~/utils/expand";

import type { Selection } from "../../../../Question.types";

export type FeedbackSectionProps = Expand<{
  show: boolean;
  selected: Selection | null;
  // correct?: boolean;
  // feedbackLiveEdit?: DataCSLP;
  // feedback?: string;
  currentTopic: string;
  totalScore: number;
  topicPercentage: number;
}>;
