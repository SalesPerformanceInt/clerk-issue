import type { QuestionItem } from "~qcs/contentstack";
import type { ContentStackSDKClient } from "~qcs/contentstack/client";
import { logError } from "~qcs/utils/logger";
import type { Query } from "contentstack";

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
