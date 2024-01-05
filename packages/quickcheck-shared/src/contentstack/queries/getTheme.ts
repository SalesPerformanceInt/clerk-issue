import type { QuickcheckTheme } from "~/contentstack";
import type { ContentStackSDKClient } from "~/contentstack/client";

import { logError } from "~/utils/logger";

export async function getTheme(this: ContentStackSDKClient, uid: string) {
  try {
    const contentType = this.client.ContentType("theme");

    const entry = contentType
      .Entry(uid)
      .language(this.language)
      .includeContentType()
      .toJSON();

    return (await entry.fetch()) as QuickcheckTheme;
  } catch (error) {
    logError({ error, log: "getTheme" });
    return null;
  }
}
