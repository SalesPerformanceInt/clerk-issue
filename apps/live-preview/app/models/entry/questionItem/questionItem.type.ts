import type { EntryLivePreviewData } from "../entry.types";
import type { MCQuestion } from "../variants/multipleChoice";
import type { TFQuestion } from "../variants/trueOrFalse";

/**
 * QuestionItem Typings
 */

export type QuestionItemData = EntryLivePreviewData & {
  variants: (MCQuestion | TFQuestion)[];
};
