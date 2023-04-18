import { McQuestionFragmentFragment } from "~/generated/graphql";

import type { ChoiceData, ChoiceProps } from "../Choice/Choice.types";

export type Y = McQuestionFragmentFragment;

export type OnChoiceSelect = ({ choice }: Pick<ChoiceProps, "choice">) => void;

export type MultipleChoiceProps = {
  question: McQuestionFragmentFragment;
  selected: ChoiceData | null;
  showConfidence: boolean;
  onChoiceSelect: ({ choice }: Pick<ChoiceProps, "choice">) => void;
  onGoBackClick?: () => void;
};
