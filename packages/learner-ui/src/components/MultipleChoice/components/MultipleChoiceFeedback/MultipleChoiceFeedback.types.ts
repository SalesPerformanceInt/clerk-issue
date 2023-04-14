import type { Expand } from "~/utils/expand";

import type { MultipleChoiceProps } from "../../MultipleChoice.types";

export type MultipleChoiceFeedbackProps = Expand<
  {
    feedback: boolean;
  } & Pick<MultipleChoiceProps, "selected" | "onGoBackClick">
>;
