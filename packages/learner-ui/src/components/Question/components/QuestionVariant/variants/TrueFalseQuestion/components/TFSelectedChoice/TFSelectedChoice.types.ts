import {
  TFSelected,
  TrueFalseQuestionProps,
} from "../../TrueFalseQuestion.types";

export type TFSelectedChoiceProps = {
  show: boolean;
  selected: TFSelected;
} & Pick<TrueFalseQuestionProps, "tfquestion">;
