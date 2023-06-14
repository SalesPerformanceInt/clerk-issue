import type { Selection } from "~/index";

import type { TrueFalseQuestionProps } from "../../TrueFalseQuestion.types";

export type TFSelectedChoiceProps = {
  show: boolean;
  selected: Selection | null;
} & Pick<TrueFalseQuestionProps, "tfquestion">;
