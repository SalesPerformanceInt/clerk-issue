import type { TFQuestion } from "~/models/entry/variants/trueOrFalse";

import type { QuestionItemVariant } from "../../QuestionItem.types";

export type { QuestionItemVariant };
export type TrueOrFalseVariantProps = QuestionItemVariant & TFQuestion;
