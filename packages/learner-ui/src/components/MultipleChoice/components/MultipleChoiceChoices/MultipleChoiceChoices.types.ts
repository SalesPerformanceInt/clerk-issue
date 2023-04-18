import { McQuestionFragmentFragment } from "~/generated/graphql";

import type { MultipleChoiceProps } from "../../MultipleChoice.types";

export type MultipleChoiceChoicesProps = {
  feedback: boolean;
} & Pick<MultipleChoiceProps, "selected" | "onChoiceSelect"> &
  Pick<McQuestionFragmentFragment, "choices">;
