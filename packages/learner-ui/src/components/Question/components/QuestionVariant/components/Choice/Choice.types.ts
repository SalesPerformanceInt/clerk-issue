import type { QuestionItemChoice } from "~/contentstack";

import type { Expand } from "~/utils/expand";

export type ChoiceProps = Expand<
  {
    selected?: boolean;
    disabled?: boolean;
    onClick: () => void;
  } & Pick<QuestionItemChoice, "choice">
>;
