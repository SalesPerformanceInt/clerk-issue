import { MatchedMap } from "accelerate-learner-ui";

import type { QuestionItemVariant } from "./QuestionItem.types";
import { MultipleChoiceVariant } from "./variants/MultipleChoiceVariant";
import { TrueOrFalseVariant } from "./variants/TrueOrFalseVariant";

/**
 * QuestionItemVariants Map
 */

export const questionItemVariantMap = new MatchedMap<
  string | undefined,
  (props: QuestionItemVariant) => JSX.Element
>([
  ["mcquestion", MultipleChoiceVariant],
  ["tfquestion", TrueOrFalseVariant],
  ["_", () => <></>],
]);
