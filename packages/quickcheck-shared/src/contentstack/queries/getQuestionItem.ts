import type { QuestionItem } from "~/contentstack";
import type { ContentStackSDKClient } from "~/contentstack/client";

export async function getQuestionItem(
  this: ContentStackSDKClient,
  uid: string,
) {
  try {
    const contentType = this.client.ContentType("questionitem");

    const entry = contentType
      .Entry(uid)
      .includeContentType()
      .includeReference(["topic", "topic.parent_taxonomy"])
      .toJSON();
    return (await entry.fetch()) as QuestionItem;
  } catch (error) {
    console.log("ERROR - getQuestionItem", error);
    return null;
  }
}
