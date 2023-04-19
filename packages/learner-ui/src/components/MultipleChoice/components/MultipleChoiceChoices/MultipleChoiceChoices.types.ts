import type { Expand } from "~/utils/expand";

import type {
  MCQuestion,
  MultipleChoiceProps,
} from "../../MultipleChoice.types";

export type MultipleChoiceChoicesProps = Expand<
  {
    feedback: boolean;
  } & Pick<MultipleChoiceProps, "selected" | "onChoiceSelect"> &
    Pick<MCQuestion, "choices">
>;
