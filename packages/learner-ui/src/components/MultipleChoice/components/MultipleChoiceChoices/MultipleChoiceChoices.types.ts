import type {
  MCQuestion,
  MultipleChoiceProps,
} from "../../MultipleChoice.types";

export type MultipleChoiceChoicesProps = {
  feedback: boolean;
} & Pick<MultipleChoiceProps, "selected" | "onChoiceSelect"> &
  Pick<MCQuestion, "choices">;
