import type { Query } from "contentstack";
import { isEmpty } from "remeda";

import type { QuestionItem } from "~qcs/contentstack";
import type { ContentStackSDKClient } from "~qcs/contentstack/client";

import { logError } from "~qcs/utils/logger";

const BATCH_SIZE = 250;

export async function getQuestionItems(
  this: ContentStackSDKClient,
  query: (query: Query) => Query = (query) => query,
) {
  try {
    return await this.getAllEntries<QuestionItem>("questionitem", (q) =>
      query(q.includeReference(["topic"])),
    );
  } catch (error) {
    logError({ error, log: "getQuestionItems" });
    return null;
  }
}
