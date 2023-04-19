import { McQuestionFragmentFragment } from "~/generated/graphql";

import type { DataCslp } from "~/utils/liveEdit";

import type { ChoiceData, ChoiceItem } from "../Choice/Choice.types";

export type MCQuestion = McQuestionFragmentFragment & {
  $?: {
    prompt?: DataCslp;
    stem?: DataCslp;
    instruction?: DataCslp;
  };
};

export type MultipleChoiceProps = {
  question: MCQuestion;
  selected: ChoiceData | null;
  showConfidence: boolean;
  onChoiceSelect: ({ choice }: ChoiceItem) => void;
  onGoBackClick: () => void;
  currentTopic: string;
  totalScore: number;
  topicPercentage: number;
};
