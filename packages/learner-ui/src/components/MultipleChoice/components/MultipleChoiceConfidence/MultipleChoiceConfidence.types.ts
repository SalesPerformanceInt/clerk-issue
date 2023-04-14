import type { Expand } from "~/utils/expand";

import type { MultipleChoiceProps } from "../../MultipleChoice.types";

export type MultipleChoiceConfidenceProps = Expand<
  {
    feedback: boolean;
  } & Pick<MultipleChoiceProps, "selected" | "onGoBackClick">
>;
