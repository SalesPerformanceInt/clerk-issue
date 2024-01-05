import type { QuestionItem } from "~/contentstack";
import type { ContentStackSDKClient } from "~/contentstack/client";

import { logError } from "~/utils/logger";

export async function getQuestionItem(
  this: ContentStackSDKClient,
  uid: string,
) {
  try {
    const contentType = this.client.ContentType("questionitem");

    const entry = contentType
      .Entry(uid)
      .language(this.language)
      .includeContentType()
      .includeReference(["topic", "topic.parent_taxonomy"])
      .toJSON();
    return (await entry.fetch()) as QuestionItem;
  } catch (error) {
    logError({ error, log: "getQuestionItem" });
    return null;
  }
}
