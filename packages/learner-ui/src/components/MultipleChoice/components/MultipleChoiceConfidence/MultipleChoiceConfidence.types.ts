import type { Expand } from "~/utils/expand";

import type { MCSelected, OnGoBackClick } from "../../MultipleChoice.types";

export type MultipleChoiceConfidenceProps = Expand<{
  feedback: boolean;
  selected: MCSelected;
  onGoBackClick: OnGoBackClick;
}>;
