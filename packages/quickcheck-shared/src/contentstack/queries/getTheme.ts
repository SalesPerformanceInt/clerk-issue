import type { QuickcheckTheme } from "~/contentstack";
import type { ContentStackSDKClient } from "~/contentstack/client";

export async function getTheme(this: ContentStackSDKClient, uid: string) {
  try {
    const contentType = this.client.ContentType("theme");
    const entry = contentType.Entry(uid).includeContentType().toJSON();
    return (await entry.fetch()) as QuickcheckTheme;
  } catch (error) {
    console.log("ERROR - contentStack - getTheme", error);
    return null;
  }
}
