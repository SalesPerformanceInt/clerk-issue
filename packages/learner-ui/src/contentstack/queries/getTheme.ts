import type { QuickcheckTheme } from "~/contentstack";
import type { ContentStackSDKClient } from "~/contentstack/client";

export async function getTheme(this: ContentStackSDKClient, uid: string) {
  try {
    const contentType = this.client.ContentType("quickcheck_theme");
    const entry = contentType
      .Entry(uid)
      .includeContentType()
      // .includeReference(["taxonomy", "taxonomy.parent_taxonomies"])
      .toJSON();
    return (await entry.fetch()) as QuickcheckTheme;
  } catch (error) {
    console.log("ERROR - getTheme", error);
    return null;
  }
}
