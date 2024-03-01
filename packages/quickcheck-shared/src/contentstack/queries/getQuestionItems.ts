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
    const contentType = this.client.ContentType("questionitem");

    const getQuestions = async (
      batch = 0,
      fetched: QuestionItem[] = [],
    ): Promise<QuestionItem[]> => {
      const [result] = (await query(contentType.Query())
        .includeReference(["topic"])
        .skip(batch * BATCH_SIZE)
        .limit(250)
        .includeContentType()
        .language(this.language)
        .includeFallback()
        .toJSON()
        .find()) as [QuestionItem[]];

      if (isEmpty(result)) return fetched;

      return getQuestions(batch + 1, [...fetched, ...result]);
    };

    return await getQuestions();
  } catch (error) {
    logError({ error, log: "getQuestionItems" });
    return null;
  }
}
