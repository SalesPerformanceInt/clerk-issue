import type { DragEndEvent } from "@dnd-kit/core";
import type {
  FillBlanksQuestion,
  FillBlanksQuestionWord,
} from "~/contentstack";

import type { Expand } from "~/utils/expand";

export type DraggableWord = FillBlanksQuestionWord["draggable_word"];

export type WordDragEvent = DragEndEvent & {
  active: { data: { current: { order: number } } };
  over: { data: { current: { order: number } } };
};

export type FillBlanksProps = Expand<
  Pick<FillBlanksQuestion, "fillblanksquestion">
>;
