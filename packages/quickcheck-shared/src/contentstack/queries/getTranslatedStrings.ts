import type { TranslatedStrings } from "~qcs/contentstack";
import type { ContentStackSDKClient } from "~qcs/contentstack/client";

import { logError } from "~qcs/utils/logger";

export async function getTranslatedStrings(
  this: ContentStackSDKClient,
  uid: string,
) {
  try {
    const contentType = this.client.ContentType("translated_strings");

    const entry = contentType.Entry(uid).language(this.language).toJSON();

    return (await entry.fetch()) as TranslatedStrings;
  } catch (error) {
    logError({ error, log: "getTranslatedStrings" });
    return null;
  }
}
