import type { Selection } from "~/index";

import type { TrueFalseQuestionProps } from "../../TrueFalseQuestion.types";

export type TFSelectedChoiceProps = {
  show: boolean;
  selected: Selection<boolean> | null;
} & Pick<TrueFalseQuestionProps, "tfquestion">;
