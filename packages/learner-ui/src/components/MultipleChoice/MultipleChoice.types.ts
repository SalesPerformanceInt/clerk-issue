import { McQuestionFragmentFragment } from "~/generated/graphql";

import type { Expand } from "~/utils/expand";
import type { DataCslp } from "~/utils/liveEdit";

import type { ChoiceData, ChoiceItem } from "../Choice/Choice.types";

export type MCQuestion = Expand<
  McQuestionFragmentFragment & {
    $?: {
      prompt?: DataCslp;
      stem?: DataCslp;
      instruction?: DataCslp;
    };
  }
>;

export type OnChoiceSelect = ({ choice }: ChoiceItem) => void;

export type MultipleChoiceProps = {
  question: MCQuestion;
  selected: ChoiceData | null;
  showConfidence: boolean;
  onChoiceSelect: OnChoiceSelect;
  onGoBackClick: () => void;
  currentTopic: string;
  totalScore: number;
  topicPercentage: number;
};
