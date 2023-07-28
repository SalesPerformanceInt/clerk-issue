import type { Query } from "contentstack";
import type { QuestionItem } from "~/contentstack";
import type { ContentStackSDKClient } from "~/contentstack/client";

export async function getQuestionItems(
  this: ContentStackSDKClient,
  query: (query: Query) => Query = (query) => query,
) {
  try {
    const contentType = this.client.ContentType("questionitem");
    const [result] = (await query(contentType.Query())
      .includeReference(["topic"])
      .includeContentType()
      .toJSON()
      .find()) as [QuestionItem[]];

    return result;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
