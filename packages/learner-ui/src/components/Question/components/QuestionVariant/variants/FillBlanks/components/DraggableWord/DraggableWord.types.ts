import type { FillBlanksQuestionWord } from "~/contentstack";

import type { Expand } from "~/utils/expand";

export type DraggableWordProps = Expand<{
  text: string;
  id: string;
  order: number;
  disabled: boolean;
  liveEdit?: FillBlanksQuestionWord["draggable_word"]["$"];
}>;
