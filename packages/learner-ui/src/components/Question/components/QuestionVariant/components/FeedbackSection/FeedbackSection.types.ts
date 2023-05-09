import type { ReactNode } from "react";

import type { Expand } from "~/utils/expand";

import type { Selection } from "../../../../Question.types";

export type FeedbackSectionProps = Expand<{
  show: boolean;
  selected: Selection | null;
  currentTopic: string;
  totalScore: number;
  topicPercentage: number;
  children?: ReactNode;
}>;
