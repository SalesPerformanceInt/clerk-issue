import type { QuestionItem } from "quickcheck-shared";

import type { WithContentType } from "~/models/livePreview.types";

/**
 * Question Item LP
 */

export type QuestionItemLivePreview = WithContentType<
  QuestionItem,
  "questionitem"
>;
