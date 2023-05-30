import type { FillBlanksQuestionWord } from "~/contentstack";

import type { Expand } from "~/utils/expand";

export type DraggableWordData = {
  order: number;
};

export type DraggableWordProps = Expand<
  {
    text: string;
    id: string;
    disabled: boolean;
    liveEdit?: FillBlanksQuestionWord["draggable_word"]["$"];
  } & Pick<DraggableWordData, "order">
>;
