import type { MCQuestion } from "~/models/entry/variants/multipleChoice";

import type { QuestionItemVariant } from "../../QuestionItem.types";

export type { QuestionItemVariant };
export type MultipleChoiceVariantProps = QuestionItemVariant & MCQuestion;
