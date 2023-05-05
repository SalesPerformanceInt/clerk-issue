import {
  OnTFChoiceSelect,
  TrueFalseQuestionProps,
} from "../../TrueFalseQuestion.types";

export type TFChoicesProps = {
  onChoiceSelect: OnTFChoiceSelect;
  offset?: number;
  show: boolean;
} & Pick<TrueFalseQuestionProps, "tfquestion">;
