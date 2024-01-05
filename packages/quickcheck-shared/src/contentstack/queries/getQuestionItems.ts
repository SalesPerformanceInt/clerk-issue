import type { Query } from "contentstack";

import type { QuestionItem } from "~/contentstack";
import type { ContentStackSDKClient } from "~/contentstack/client";

import { logError } from "~/utils/logger";

export async function getQuestionItems(
  this: ContentStackSDKClient,
  query: (query: Query) => Query = (query) => query,
) {
  try {
    const contentType = this.client.ContentType("questionitem");

    const [result] = (await query(contentType.Query())
      .includeReference(["topic"])
      .includeContentType()
      .language(this.language)
      .toJSON()
      .find()) as [QuestionItem[]];

    return result;
  } catch (error) {
    logError({ error, log: "getQuestionItems" });
    return null;
  }
}
