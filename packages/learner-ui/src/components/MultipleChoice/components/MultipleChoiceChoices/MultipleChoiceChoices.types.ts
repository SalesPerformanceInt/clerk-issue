import type { MCQuestion } from "~/contentstack";

import type { Expand } from "~/utils/expand";

import type { MCSelected, OnChoiceSelect } from "../../MultipleChoice.types";

export type MultipleChoiceChoicesProps = Expand<{
  feedback: boolean;
  selected: MCSelected;
  onChoiceSelect: OnChoiceSelect;
  choices: MCQuestion["mcquestion"]["choices"];
}>;
