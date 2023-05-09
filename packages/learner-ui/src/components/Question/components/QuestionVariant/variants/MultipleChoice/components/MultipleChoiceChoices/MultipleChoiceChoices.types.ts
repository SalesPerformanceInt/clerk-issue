import type { MCQuestion } from "~/contentstack";

import type { Expand } from "~/utils/expand";

import type { Selection } from "../../../../../../Question.types";
import type { OnMCChoiceSelect } from "../../MultipleChoice.types";

export type MultipleChoiceChoicesProps = Expand<{
  selected: Selection | null;
  onChoiceSelect: OnMCChoiceSelect;
  choices: MCQuestion["mcquestion"]["choices"];
}>;
